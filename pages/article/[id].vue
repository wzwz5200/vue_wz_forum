<template>
  <div class="article-container">
    <div class="article-welcome-box">
      <div class="welcome-content">
        <h3>文章详情</h3>
      </div>
      <div class="back-button-container">
        <el-button 
          type="primary" 
          link 
          class="back-button"
          @click="router.push('/')"
        >
          <el-icon class="back-icon"><ArrowLeft /></el-icon>
          返回首页
        </el-button>
      </div>
    </div>

    <div v-if="pending" class="loading">
      <el-skeleton :rows="10" animated />
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else>
      <ArticleComponent :article="article" />
      <CommentSection :article-id="articleId" />
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from '@element-plus/icons-vue';
import ArticleComponent from '~/components/ArticleComponent.vue';
import CommentSection from '~/components/CommentSection.vue';

const router = useRouter();
const route = useRoute();

const articleId = route.params.id;

// 获取文章数据
const { data: article, pending, error } = await useAsyncData(
  'article',
  async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:4523/m1/5762725-5446332-default/api/article',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: articleId
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('文章获取失败');
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error('获取文章失败:', error);
      throw error;
    }
  }
);
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading, .error {
  padding: 40px;
  text-align: center;
}

.error {
  color: var(--el-color-danger);
}

.article-welcome-box {
  position: relative;
  border-radius: 0.75rem;
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.44);
  background: linear-gradient(179.74deg, rgba(22, 23, 24, 0.62) -41.462%, rgba(0, 0, 0, 0.15) 76.335%);
  height: 6rem;
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.article-welcome-box h3 {
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
}

.back-button-container {
  position: absolute;
  left: 20px;
  bottom: 15px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff !important;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  opacity: 0.8;
}

.back-button:hover {
  transform: translateX(-4px);
  opacity: 1;
}

.back-icon {
  font-size: 1.1rem;
}
</style> 