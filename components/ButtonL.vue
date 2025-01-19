<template>
  <el-row>
    <el-col :span="24">
      <div class="flat-panel">

        <div class="panel-header">
    
        </div>
        <el-row :gutter="1" class="button-container">
          <el-col :span="24" class="button-spacing" v-for="category in categories" :key="category">
            <div class="flat-button-wrapper">
              <el-button 
                text 
                block 
                @click="handleCategoryClick(category)"
                :class="{ 'active-category': selectedCategory === category }"
              >
                <el-icon class="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2.5 2h19v20h-19zm2 2v16h15V4zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
                  </svg>
                </el-icon>
                <span class="category-text">{{ category }}</span>
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
import { EditPen } from '@element-plus/icons-vue';

const router = useRouter();
const categories = ["全部", "游戏", "编程", "生活"];
const selectedCategory = ref('全部');
const emit = defineEmits(["categorySelected"]);

const handleCategoryClick = (category) => {
  selectedCategory.value = category;
  emit("categorySelected", category);
};
</script>

<style scoped>
.flat-panel {
  border-radius: 8px;
  padding: 16px;
}

.panel-header {
  margin-bottom: 20px;
  text-align: right;
}

.header-text-wrapper {
  display: flex;
  justify-content: flex-start;
  margin-right: 35%;
}

.header-text {
  color: #409EFF;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  display: inline-block;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.button-spacing {
  width: 100%;
}

.flat-button-wrapper :deep(.el-button) {
  width: 100%;
  height: 40px;
  background: rgba(36, 36, 36, 0.5);
  border: none;
  border-radius: 4px;
  color: #ffffff;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 0;
}

.flat-button-wrapper :deep(.el-button:hover) {
  background: rgba(45, 45, 45, 0.7);
  transform: translateX(4px);
}

.flat-button-wrapper :deep(.el-button.active-category) {
  background: rgba(64, 158, 255, 0.8);
  color: #ffffff;
}

.category-icon {
  margin-right: 12px;
  font-size: 16px;
  opacity: 0.8;
}

.category-text {
  font-size: 14px;
  font-weight: 400;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .flat-panel {
    padding: 12px;
  }

  .flat-button-wrapper :deep(.el-button) {
    height: 36px;
    padding: 0 12px;
  }

  .category-text {
    font-size: 13px;
  }
}

/* 动画效果 */
.flat-button-wrapper :deep(.el-button) {
  position: relative;
  overflow: hidden;
}

.flat-button-wrapper :deep(.el-button)::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  transition: 0.3s;
}

.flat-button-wrapper :deep(.el-button:hover)::after {
  left: 100%;
}

.flat-button-wrapper :deep(.el-button.active-category)::after {
  display: none;
}

.publish-button-container {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.publish-btn {
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, #409EFF, #36D1DC);
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
}

.publish-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.publish-icon {
  font-size: 1.1rem;
}
</style>
  