<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h2>欢迎回来</h2>
        <p>请登录您的账号</p>
      </div>
      
      <el-form :model="loginForm" class="login-form">
        <el-form-item>
          <el-input 
            v-model="loginForm.username" 
            placeholder="用户名" 
            prefix-icon="User"
          />
        </el-form-item>
        
        <el-form-item>
          <el-input 
            v-model="loginForm.password" 
            type="password" 
            placeholder="密码" 
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        
        <div class="form-footer">
          <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          <a href="#" class="forgot-password">忘记密码？</a>
        </div>
        
        <el-button type="primary" class="login-button" @click="handleLogin">
          登录
        </el-button>
        
        <div class="register-link">
          还没有账号？ <a href="#">立即注册</a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { User, Lock } from '@element-plus/icons-vue';

const loginForm = reactive({
  username: "",
  password: "",
});

const rememberMe = ref(false);

const handleLogin = () => {
  console.log("Login attempt:", loginForm);
};
</script>

<style scoped>
/* 防止页面滚动 */
:root, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #262626 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-box {
  width: 400px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h2 {
  color: #ffffff;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
}

.login-header p {
  color: #999;
  margin: 0;
  font-size: 0.9rem;
}

.login-form {
  margin-top: 1.5rem;
}

:deep(.el-input__wrapper) {
  background: rgba(2, 2, 2, 0.233) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  box-shadow: none !important;
}

:deep(.el-input__inner) {
  color: #fff !important;
  height: 45px;
}

:deep(.el-input__prefix-inner svg) {
  color: #ffffff;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

:deep(.el-checkbox__label) {
  color: #4e4545;
}

.forgot-password {
 
  text-decoration: none;
  font-size: 0.9rem;
}

.login-button {
  width: 100%;
  height: 45px;
  font-size: 1rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #409EFF, #36D1DC);
  border: none;
  margin-top: 1rem;
}

.login-button:hover {
  background: linear-gradient(90deg, #36D1DC, #409EFF);
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(252, 252, 252, 0.2);
}

.register-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #999;
  font-size: 0.9rem;
}

.register-link a {
  color: #409EFF;
  text-decoration: none;
  margin-left: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-box {
    width: 90%;
    padding: 2rem;
  }
}
</style>
  