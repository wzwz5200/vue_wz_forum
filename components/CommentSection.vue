<template>
  <div class="comment-section">
    <!-- 发表评论 -->
    <div class="comment-form">
      <h3>发表评论</h3>
      <el-form :model="commentForm" @submit.prevent="submitComment">
        <el-input
          v-model="commentForm.content"
          type="textarea"
          :rows="3"
          placeholder="写下你的评论..."
          resize="none"
        />
        <el-button 
          type="primary" 
          @click="submitComment"
          :loading="submitting"
          class="submit-btn"
        >
          发表评论
        </el-button>
      </el-form>
    </div>

    <!-- 评论列表 -->
    <div class="comments-list">
      <h3>全部评论 ({{ comments.length }})</h3>
      <div v-if="loading" class="loading">
        <el-skeleton :rows="3" animated />
      </div>
      <template v-else>
        <div v-if="comments.length === 0" class="no-comments">
          暂无评论，快来抢沙发吧！
        </div>
        <div v-else class="comment-item" v-for="comment in comments" :key="comment.id">
          <div class="comment-header">
            <div class="user-info">
              <el-avatar :src="comment.avatar" :size="32" />
              <span class="username">{{ comment.username }}</span>
            </div>
            <span class="time">{{ comment.time }}</span>
          </div>
          <div class="comment-content">
            {{ comment.content }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  articleId: {
    type: [String, Number],
    required: true
  }
});

const loading = ref(false);
const submitting = ref(false);
const comments = ref([
  {
    id: 1,
    username: "张三",
    avatar: "https://ikunshare.com/assets/logo-tovlbtqc.png",
    content: "这篇文章写得很好，对我帮助很大！",
    time: "2024-01-20 14:30"
  },
  {
    id: 2,
    username: "李四",
    avatar: "https://ikunshare.com/assets/logo-tovlbtqc.png",
    content: "文章讲解得很清晰，期待更多类似的内容。",
    time: "2024-01-20 15:45"
  },
  {
    id: 3,
    username: "王五",
    avatar: "https://ikunshare.com/assets/logo-tovlbtqc.png",
    content: "学到了很多，感谢分享！",
    time: "2024-01-20 16:20"
  }
]);

const commentForm = ref({
  content: ''
});

// 模拟提交评论
const submitComment = async () => {
  if (!commentForm.value.content.trim()) {
    ElMessage.warning('请输入评论内容');
    return;
  }

  submitting.value = true;
  try {
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 添加新评论到列表
    const newComment = {
      id: comments.value.length + 1,
      username: "当前用户",
      avatar: "https://ikunshare.com/assets/logo-tovlbtqc.png",
      content: commentForm.value.content,
      time: new Date().toLocaleString()
    };
    
    comments.value.unshift(newComment);
    ElMessage.success('评论发表成功');
    commentForm.value.content = '';
  } catch (error) {
    console.error('发表评论失败:', error);
    ElMessage.error('发表评论失败，请重试');
  } finally {
    submitting.value = false;
  }
};

// 移除获取评论列表的函数，因为现在使用静态数据
</script>

<style scoped>
.comment-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--el-border-color-lighter);
}

.comment-form {
  margin-bottom: 2rem;
}

.submit-btn {
  margin-top: 1rem;
}

.comments-list {
  margin-top: 2rem;
}

.comment-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.username {
  font-weight: 500;
}

.time {
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
}

.comment-content {
  line-height: 1.6;
  color: var(--el-text-color-regular);
}

.no-comments {
  text-align: center;
  color: var(--el-text-color-secondary);
  padding: 2rem 0;
}

.loading {
  padding: 1rem 0;
}
</style> 