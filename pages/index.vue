<template>
    <div class="forum">
      <div class="post-list">
        <PostCard
  v-for="post in currentPosts"
  :key="post.id"
  :post="post"
  :loading="pending"
/>

      </div>
    
    <!-- 添加加载更多按钮 -->
    <div class="load-more" v-if="hasMorePosts">
      <el-button 
        type="primary" 
        :loading="loadingMore"
        @click="loadMorePosts"
        class="load-more-btn"
      >
        {{ loadingMore ? '加载中...' : '加载更多' }}
      </el-button>
    </div>
    </div>
  </template>
  
  <script setup>
  import PostCard from "~/components/PostCard.vue";
  import { ref, computed } from "vue";
  import { ElMessage } from 'element-plus';
  
  const currentPage = ref(1);
  const pageSize = 15; // 每页显示15条
  const loadingMore = ref(false);
  
  // 接收父组件传递的category属性
  const props = defineProps({
    category: {
      type: String,
      default: '全部'
    }
  });
  
  // 生成模拟数据的函数
  const generateMockPosts = (start, count) => {
    const categories = ['编程', '游戏', '生活', '技术', '随笔'];
    const mockPosts = [];
    
    for (let i = start; i < start + count; i++) {
      mockPosts.push({
        id: i,
        title: `这是一篇测试文章 ${i}`,
        summary: `这是文章 ${i} 的摘要，描述了一些有趣的内容...`,
        category: categories[Math.floor(Math.random() * categories.length)],
        author: `作者${Math.floor(Math.random() * 100)}`,
        date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 50)
      });
    }
    return mockPosts;
  };
  
  // 修改 useAsyncData 的错误处理
  const { data: posts, pending, refresh } = await useAsyncData(
    'posts',
    async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:4523/m1/5762725-5446332-default/api/post/?category=${props.category}&page=1&limit=${pageSize}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // 如果返回的数据不足，使用模拟数据补充
        const realPosts = result.data.posts || [];
        const mockPosts = generateMockPosts(realPosts.length + 1, pageSize - realPosts.length);
        return {
          posts: [...realPosts, ...mockPosts],
          total: 100 // 设置一个固定的总数
        };
      } catch (error) {
        console.error('获取帖子失败:', error);
        // 使用模拟数据
        return {
          posts: generateMockPosts(1, pageSize),
          total: 100
        };
      }
    },
    {
      watch: [() => props.category],
      immediate: true
    }
  );
  
  // 当前显示的帖子列表
  const currentPosts = computed(() => {
    return posts.value?.posts || [];
  });
  
  // 是否还有更多帖子
  const hasMorePosts = computed(() => {
    return currentPosts.value.length < (posts.value?.total || 0);
  });
  
  // 修改加载更多的处理
  const loadMorePosts = async () => {
    if (loadingMore.value) return;
    
    loadingMore.value = true;
    try {
      const nextPage = Math.floor(currentPosts.value.length / pageSize) + 1;
      const response = await fetch(
        `http://127.0.0.1:4523/m1/5762725-5446332-default/api/post/?category=${props.category}&page=${nextPage}&limit=${pageSize}`
      );
      
      if (!response.ok) {
        throw new Error('加载更多帖子失败');
      }
      
      const result = await response.json();
      const realPosts = result.data.posts || [];
      const mockPosts = generateMockPosts(currentPosts.value.length + realPosts.length + 1, pageSize - realPosts.length);
      
      // 将新帖子添加到现有列表中
      posts.value = {
        posts: [...currentPosts.value, ...realPosts, ...mockPosts],
        total: posts.value.total
      };
      
    } catch (error) {
      console.error('加载更多帖子失败:', error);
      // 使用模拟数据
      const mockPosts = generateMockPosts(currentPosts.value.length + 1, pageSize);
      posts.value = {
        posts: [...currentPosts.value, ...mockPosts],
        total: posts.value.total
      };
    } finally {
      loadingMore.value = false;
    }
  };
  </script>
  
  <style scoped>
  .forum {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .post-list {
    display: flex;
    flex-direction: column; /* 改为垂直布局 */
    gap: 20px; /* 卡片之间的间距 */
    width: 50rem;
    margin-bottom: 2rem;
  }
  
  .load-more {
    margin: 2rem 0;
    text-align: center;
    width: 100%;
  }
  
  .load-more-btn {
    width: 200px;
    height: 40px;
    background: linear-gradient(90deg, #409EFF, #36D1DC);
    border: none;
    transition: all 0.3s ease;
  }
  
  .load-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
  }
  </style>
  