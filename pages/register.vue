<template>
  <div class="register-container">
    <div class="register-box">
      <div class="register-header">
        <h2>创建账号</h2>
        <p>请填写以下信息完成注册</p>
      </div>
      
      <el-form :model="registerForm" class="register-form">
        <el-form-item>
          <el-input 
            v-model="registerForm.username" 
            placeholder="用户名" 
            prefix-icon="User"
          />
        </el-form-item>
        
        <el-form-item>
          <el-input 
            v-model="registerForm.email" 
            placeholder="电子邮箱" 
            prefix-icon="Message"
          />
        </el-form-item>
        
        <el-form-item>
          <el-input 
            v-model="registerForm.password" 
            type="password" 
            placeholder="密码" 
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        
        <el-form-item>
          <el-input 
            v-model="registerForm.confirmPassword" 
            type="password" 
            placeholder="确认密码" 
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        
        <div class="form-footer">
          <el-checkbox v-model="agreeTerms">我同意服务条款和隐私政策</el-checkbox>
        </div>
        
        <el-button type="primary" class="register-button" @click="handleRegister">
          注册
        </el-button>
        
        <div class="login-link">
          已有账号？ <a href="/login">立即登录</a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { User, Lock, Message } from '@element-plus/icons-vue';

const registerForm = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
});

const agreeTerms = ref(false);

const handleRegister = () => {
  console.log("Register attempt:", registerForm);
};
</script>

<style scoped>
.register-container {
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

.register-box {
  width: 400px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-header h2 {
  color: #ffffff;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
}

.register-header p {
  color: #999;
  margin: 0;
  font-size: 0.9rem;
}

.register-form {
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
  margin: 1rem 0;
}

:deep(.el-checkbox__label) {
  color: #4e4545;
}

.register-button {
  width: 100%;
  height: 45px;
  font-size: 1rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #409EFF, #36D1DC);
  border: none;
  margin-top: 1rem;
}

.register-button:hover {
  background: linear-gradient(90deg, #36D1DC, #409EFF);
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(252, 252, 252, 0.2);
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #999;
  font-size: 0.9rem;
}

.login-link a {
  color: #409EFF;
  text-decoration: none;
  margin-left: 0.5rem;
}

@media (max-width: 480px) {
  .register-box {
    width: 90%;
    padding: 2rem;
  }
}
</style>
