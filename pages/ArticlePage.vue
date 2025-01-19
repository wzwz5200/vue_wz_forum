<template>
  <div class="article-container">
    <div v-if="pending" class="loading">
      <el-skeleton :rows="10" animated />
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="article-content">
      <div class="article-header">
        <h1>{{ article?.title }}</h1>
        <div class="article-meta">
          <el-avatar :src="article?.avatar" :size="32" />
          <span class="author">{{ article?.author }}</span>
          <span class="date">{{ article?.date }}</span>
          <el-tag size="small">{{ article?.category }}</el-tag>
        </div>
      </div>
      <div class="markdown-content" v-html="renderedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const route = useRoute();
const articleId = route.params.id;

// 获取文章数据
const { data: article, pending, error } = await useAsyncData(
  'article',
  async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:4523/m1/5762725-5446332-default/api/article/${articleId}`
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

// 渲染 Markdown 内容
const renderedContent = computed(() => {
  if (!article.value?.content) return '';
  return marked(article.value.content);
});
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

.article-header {
  margin-bottom: 2rem;
}

.article-header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--el-text-color-secondary);
}

.markdown-content {
  line-height: 1.6;
  font-size: 1.1rem;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(code) {
  background-color: var(--el-bg-color-page);
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

.markdown-content :deep(pre) {
  background-color: var(--el-bg-color-page);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-container {
    padding: 15px;
  }
  
  .article-header h1 {
    font-size: 1.5rem;
  }
}
</style>
