<template>
  <el-card class="post-card" shadow="hover" :loading="loading" @click="navigateToArticle">
    <div class="post-content">
      <!-- 左侧作者信息 -->
      <div class="author-section">
        <el-avatar :src="post.avatar" class="avatar" />
        <span class="author-name">{{ post.author }}</span>
      </div>

      <!-- 中间主要内容 -->
      <div class="main-content">
        <h3 class="title">{{ post.title }}</h3>
        <p class="summary">{{ post.summary }}</p>
      </div>

      <!-- 右侧信息 -->
      <div class="meta-section">
        <el-tag size="small" :type="getTagType(post.category)">{{ post.category }}</el-tag>
        <span class="date">{{ post.date }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const navigateToArticle = () => {
  router.push(`/article/${props.post.id}`);
};

// 根据分类返回不同的标签类型
const getTagType = (category) => {
  const types = {
    '编程': 'success',
    '游戏分区': 'warning',
    '生活': 'info',
    '默认': 'info'
  };
  return types[category] || types['默认'];
};
</script>

<style scoped>
.post-card {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  border: none;
  background-color: var(--el-bg-color);
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-content {
  display: grid;
  grid-template-columns: 120px 1fr 150px;
  gap: 20px;
  align-items: center;
  min-height: 100px;
}

/* 作者区域样式 */
.author-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 50px;
  height: 50px;
}

.author-name {
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
}

/* 主要内容区域 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.summary {
  margin: 0;
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  line-clamp: 2;
}

/* 元信息区域 */
.meta-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.date {
  font-size: 0.8rem;
  color: var(--el-text-color-secondary);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .post-content {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 12px;
  }

  .author-section {
    flex-direction: row;
    justify-content: flex-start;
  }

  .meta-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
  