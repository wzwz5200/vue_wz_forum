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
    
    </div>
  </template>
  
  <script setup>
  import PostCard from "~/components/PostCard.vue";
  import { ref, computed } from "vue";
  
  const currentPage = ref(1);
  
  // 接收父组件传递的category属性
  const props = defineProps({
    category: {
      type: String,
      default: '全部'
    }
  });
  
  // 使用 useAsyncData 进行服务器端数据获取
  const { data: posts, pending, refresh } = await useAsyncData(
    'posts',
    async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:4523/m1/5762725-5446332-default/api/post/?category=${props.category}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result.data.posts || [];
      } catch (error) {
        console.error('获取帖子失败:', error);
        return [];
      }
    },
    {
      watch: [() => props.category], // 监听分类变化
      immediate: true
    }
  );
  
  // 分页相关逻辑
  const currentPosts = computed(() => {
    if (!posts.value) return [];
    return posts.value.slice((currentPage.value - 1) * 5, currentPage.value * 5);
  });
  </script>
  
  <style scoped>
  .forum {
 
    padding: 10px;
  }
  .post-list {
    display: flex;
  flex-direction: column; /* 改为垂直布局 */
  gap: 20px; /* 卡片之间的间距 */
  width: 50rem;

}
  </style>
  