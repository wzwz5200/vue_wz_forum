<template>
  <el-container class="full-screen">
    <!-- 加载动画 -->
    <LoadingScreen v-if="isLoading" />
    
    <!-- 顶部导航栏 -->
    <el-header class="app-header">
      <div class="header-content">
        <!-- 左侧 Logo -->
        <div class="logo">
          <img src="./public/favicon.ico" alt="Logo" class="logo-image" />
        </div>
        
        <!-- 右侧导航按钮 -->
        <div class="nav-buttons">
          <el-button 
            type="primary" 
            link
            @click="navigateTo('/publish')"
            class="nav-button publish-button"
          >
            <el-icon class="nav-icon"><EditPen /></el-icon>
            <span>发布文章</span>
          </el-button>
          
          <el-divider direction="vertical" class="divider" />
          
          <el-button 
            type="primary" 
            link
            @click="navigateTo('/login')"
            class="nav-button"
          >
            <el-icon class="nav-icon"><User /></el-icon>
            <span>登录</span>
          </el-button>
          
          <el-divider direction="vertical" class="divider" />
          
          <el-button 
            type="primary" 
            link
            @click="navigateTo('/register')"
            class="nav-button"
          >
            <el-icon class="nav-icon"><UserFilled /></el-icon>
            <span>注册</span>
          </el-button>
        </div>
      </div>
    </el-header>

    <!-- 只在首页显示 Welcome box -->
    <div v-if="isHomePage" class="Welcome_box">
      <div class="welcome-content">
        <h3>Welcome WZ</h3>
        <el-button 
          type="primary"
          class="publish-welcome-btn"
          @click="navigateTo('/publish')"
        >
          <el-icon class="publish-icon"><EditPen /></el-icon>
          发布文章
        </el-button>
      </div>
    </div>

    <!-- 主体内容 -->
    <el-container>
   
      <!-- 使用 Element Plus 的响应式布局 -->
      <el-main class="app-main">
        <el-row :gutter="10">
          <!-- 左侧块：根据路由控制显示 -->
          <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="2" v-if="!isArticlePage">
            <div class="grid-content ep-bg-purple">
         
              <ButtonL @categorySelected="handleCategoryChange"/>
            </div>
          </el-col>

          <!-- 中间块：根据是否显示左侧导航调整宽度 -->
          <el-col 
            :xs="24" 
            :sm="isArticlePage ? 24 : 12" 
            :md="isArticlePage ? 24 : 16" 
            :lg="isArticlePage ? 24 : 18" 
            :xl="isArticlePage ? 24 : 20"
          >
            <div class="grid-content ep-bg-purple-light">
              <NuxtPage :category="currentCategory" />
            </div>
          </el-col>

          <!-- 右侧块：根据路由控制显示 -->
          <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="2" v-if="!isArticlePage">
            <div class="grid-content ep-bg-purple1">右侧内容</div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <!-- 页脚 -->
    <el-footer class="app-footer">
      版权所有 © 2025
    </el-footer>

    <!-- 添加发布文章抽屉 -->
    <el-drawer
      v-model="showPublishDrawer"
      direction="btt"
      size="100%"
      :with-header="false"
      destroy-on-close
    >
      <div class="publish-drawer">
        <div class="drawer-header">
          <h2>发布文章</h2>
          <el-button 
            type="primary" 
            link 
            class="close-btn"
            @click="showPublishDrawer = false"
          >
            <el-icon class="close-icon"><Close /></el-icon>
          </el-button>
        </div>
        
        <div class="drawer-content">
          <el-form :model="publishForm" class="publish-form">
            <el-form-item>
              <el-input
                v-model="publishForm.title"
                placeholder="请输入文章标题"
                class="title-input"
              />
            </el-form-item>
            
            <el-form-item>
              <el-select
                v-model="publishForm.category"
                placeholder="选择分类"
                class="category-select"
              >
                <el-option
                  v-for="item in categories"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            
            <el-form-item>
              <el-input
                v-model="publishForm.content"
                type="textarea"
                :rows="12"
                placeholder="在此输入文章内容（支持 Markdown 格式）"
                class="content-input"
              />
            </el-form-item>
          </el-form>
        </div>
        
        <div class="drawer-footer">
          <el-button @click="showPublishDrawer = false">取消</el-button>
          <el-button type="primary" @click="handlePublish">发布文章</el-button>
        </div>
      </div>
    </el-drawer>
  </el-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { User, UserFilled, EditPen, Close } from '@element-plus/icons-vue';
import LoadingScreen from '~/components/LoadingScreen.vue';

const currentCategory = ref('全部');
const router = useRouter();
const route = useRoute();

// 判断是否为文章页面
const isArticlePage = computed(() => {
  return route.path.startsWith('/article/');
});

// 判断是否为首页
const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/index';
});

const handleCategoryChange = (category) => {
  currentCategory.value = category;
};

const showPublishDrawer = ref(false);
const publishForm = ref({
  title: '',
  category: '',
  content: ''
});

// 获取分类列表
const { data: categoryData } = await useAsyncData(
  'categories',
  async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:4523/m1/5762725-5446332-default/api/categories'
      );
      if (!response.ok) {
        throw new Error('获取分类失败');
      }
      const result = await response.json();
      return result.data.categories;
    } catch (error) {
      console.error('获取分类失败:', error);
      // 使用默认分类作为后备
      return ["游戏", "编程", "生活"];
    }
  }
);

const categories = computed(() => {
  return categoryData.value || ["游戏", "编程", "生活"];
});

// 修改导航方法
const navigateTo = (path) => {
  if (path === '/publish') {
    showPublishDrawer.value = true;
  } else {
    router.push(path);
  }
};

const handlePublish = () => {
  // 处理发布逻辑
  console.log('发布文章:', publishForm.value);
  showPublishDrawer.value = false;
};

const isLoading = ref(false);

// 监听路由变化
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  // 添加一个小延迟，确保页面内容已经开始渲染
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

onMounted(() => {
  document.documentElement.classList.add('dark');
});
</script>

<style scoped>
/* 全局样式 */
.Welcome_box {
  border-radius: 0.75rem;
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.44);
  background: linear-gradient(179.74deg, rgba(22, 23, 24, 0.62) -41.462%, rgba(0, 0, 0, 0.15) 76.335%);
  height: 9rem;
  margin: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}

.welcome-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem; /* 减小间距 */
  transform: translateY(-0.5rem); /* 整体向上移动 */
}

.Welcome_box h3 {
  margin: 0;
  font-size: 1.6rem;
  margin-bottom: -0.2rem; /* 标题稍微向下移动 */
}

.publish-welcome-btn {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.7);
  height: 2.5rem;
  padding: 0 1.8rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.publish-welcome-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
  color: #fff;
  transform: scale(1.05);
}

.publish-icon {
  font-size: 1.2rem;
}

.full-screen {
  width: 100vw; /* 宽度铺满整个视口 */
  height: 100vh; /* 高度铺满整个视口 */
  margin: 0; /* 移除默认 margin */
  padding: 0; /* 移除默认 padding */
  display: flex;
  flex-direction: column;
}

/* 顶部导航栏 */
.app-header {
  width: 100%; /* 宽度铺满 */
  background: rgb(27, 30, 31);
  color: white;
  align-items: center; /* 垂直居中对齐 */
  font-size: 18px;
  text-align: center;

  height: 3.25rem;
  flex-shrink: 0; /* 防止 header 被压缩 */
}

/* 主体内容 */
.app-main {
  flex: 1; /* 占满剩余空间 */
  padding: 20px;
  overflow-y: auto; /* 如果内容过多，允许滚动 */
}

/* 栅格内容 */
.grid-content {
  width: 100%;
  min-height: 200px;
 
  max-width: 100%; /* 防止溢出 */
  overflow: hidden;
  
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* 子元素居中 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 如果有多个子元素，垂直排列 */
}

.ep-bg-purple {
  border-radius: 0.75rem;
  position: relative;
  top: 0.6rem;
  margin-left: 10rem; /* 默认右移 20px */
  box-shadow: 2px 2px 4px rgba(0,0,0,.6);
background: rgb(22, 22, 22);
}

.ep-bg-purple-light {
  
}

/* 页脚 */
.app-footer {
  width: 100%; /* 宽度铺满 */
  text-align: center;
  background-color: #303133;
  color: white;
  padding: 10px 0;
  flex-shrink: 0; /* 防止 footer 被压缩 */
}

/* 暗色模式 */
:root.dark {
  background-color: #121212;
  color: #ffffff;
}

html.dark {
  background-color: #121212;
  color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 2rem; /* 替换 right: 29% */
}

.logo-image {
  height: 2rem;
  width: auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0;
}

.nav-buttons {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 2rem;
}

.nav-button {
  font-size: 0.9rem;
  height: 2rem;
  padding: 0 12px;
  color: #fff !important;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.nav-icon {
  margin-right: 4px;
  font-size: 1.1rem;
}

.divider {
  height: 1rem;
  margin: 0 4px;
  border-color: rgba(255, 255, 255, 0.2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .nav-button span {
    display: none;
  }
  
  .nav-icon {
    margin-right: 0;
  }
  
  .nav-buttons {
    margin-right: 1rem;
  }
  
  .divider {
    margin: 0 2px;
  }
}

@media (max-width: 768px) {
  .logo {
    margin-left: 1rem;
  }
  
  .logo-image {
    height: 1.8rem;
  }
}

@media (max-width: 575.98px) {
  .logo {
    display: none;
  }
}

.publish-button {
  background: transparent;
  border: 2px solid rgba(64, 158, 255, 0.7);
  border-radius: 6px;
  padding: 0 15px;
  height: 32px;
  color: rgba(64, 158, 255, 0.9) !important;
  font-weight: 500;
  transition: all 0.2s ease;
}

.publish-button:hover {
  background: rgba(64, 158, 255, 0.7);
  color: #fff !important;
  transform: scale(1.05);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .nav-buttons {
    gap: 2px;
  }
  
  .nav-button {
    padding: 0 8px;
  }
  
  .publish-button {
    padding: 0 10px;
    height: 28px;
    border-width: 1.5px;
  }
  
  .publish-welcome-btn {
    height: 2.2rem;
    padding: 0 1.2rem;
    font-size: 0.9rem;
    border-width: 1.5px;
  }
}

.side-publish-btn {
  width: calc(100% - 2rem);
  margin: 0 1rem 1rem;
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

.side-publish-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.publish-icon {
  font-size: 1.2rem;
}

.publish-drawer {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--el-bg-color);
}

.drawer-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.drawer-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--el-text-color-primary);
}

.close-btn {
  font-size: 1.2rem;
}

.drawer-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.publish-form {
  max-width: 800px;
  margin: 0 auto;
}

.title-input :deep(.el-input__wrapper) {
  font-size: 1.2rem;
}

.category-select {
  width: 200px;
}

.content-input :deep(.el-textarea__inner) {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  line-height: 1.6;
}

.drawer-footer {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid var(--el-border-color-lighter);
}

/* 抽屉底部按钮 */
.drawer-footer .el-button--primary {
  background: transparent;
  border: 2px solid rgba(64, 158, 255, 0.7);
  color: rgba(64, 158, 255, 0.9);
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.drawer-footer .el-button--primary:hover {
  background: rgba(64, 158, 255, 0.7);
  color: #fff;
  transform: scale(1.05);
}

.drawer-footer .el-button {
  border-radius: 6px;
  font-weight: 500;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .drawer-content {
    padding: 15px;
  }
  
  .publish-form {
    width: 100%;
  }
}
</style>