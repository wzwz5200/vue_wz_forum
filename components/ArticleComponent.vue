<template>
  <div class="article-component">
    <!-- 文章头部信息 -->
    <div class="article-header">
      <div class="article-meta">
        <div class="meta-left">
          <el-avatar :src="article?.avatar" :size="40" />
          <div class="author-info">
            <span class="author-name">{{ article?.author }}</span>
            <span class="publish-time">{{ article?.date }}</span>
          </div>
        </div>
        <div class="meta-right">
          <el-tag :type="getCategoryType(article?.category)" effect="dark">
            {{ article?.category }}
          </el-tag>
        </div>
      </div>
      <h1 class="article-title">{{ article?.title }}</h1>
    </div>

    <!-- 文章内容 -->
    <div class="article-content">
      <div class="markdown-body" v-html="renderedContent"></div>
    </div>

    <!-- 文章底部 -->
    <div class="article-footer">
      <div class="article-stats">
        <div class="stat-item">
          <el-icon><View /></el-icon>
          <span>{{ article?.views || 0 }} 阅读</span>
        </div>
        <div class="stat-item">
          <el-icon><ChatLineRound /></el-icon>
          <span>{{ article?.comments || 0 }} 评论</span>
        </div>
        <div class="stat-item">
          <el-icon><Star /></el-icon>
          <span>{{ article?.likes || 0 }} 点赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';
import { View, ChatLineRound, Star } from '@element-plus/icons-vue';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

// 渲染 Markdown 内容
const renderedContent = computed(() => {
  if (!props.article?.content) return '';
  return marked(props.article.content);
});

// 获取分类标签类型
const getCategoryType = (category) => {
  const types = {
    '编程': 'success',
    '游戏': 'warning',
    '生活': 'info',
    '默认': 'info'
  };
  return types[category] || types['默认'];
};
</script>

<style scoped>
.article-component {
  background: var(--el-bg-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: 2rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.meta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--el-text-color-primary);
}

.publish-time {
  font-size: 0.875rem;
  color: var(--el-text-color-secondary);
}

.article-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0;
  line-height: 1.4;
}

.article-content {
  margin: 2rem 0;
}

.markdown-body {
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--el-text-color-primary);
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.markdown-body :deep(p) {
  margin-bottom: 1.5rem;
}

.markdown-body :deep(code) {
  background: var(--el-bg-color-page);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.markdown-body :deep(pre) {
  background: var(--el-bg-color-page);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--el-border-color-lighter);
}

.article-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
}

.stat-item .el-icon {
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-component {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.5rem;
  }

  .article-stats {
    gap: 1rem;
  }
}
</style>
