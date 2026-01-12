<template>
  <div class="login-container">
    <h2>登录</h2>
    <form class="login-form">
      <div class="form-item">
        <label for="username">账号</label>
        <input type="text" id="username" v-model="form.username" placeholder="请输入账号">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="form.password" placeholder="请输入密码">
      </div>
      <div class="form-item">
        <label for="captcha">验证码</label>
        <div class="captcha-container">
          <input type="text" id="captcha" v-model="form.captcha" placeholder="请输入验证码">
          <div class="captcha-image" @click="refreshCaptcha">
            <img v-if="captchaCode" :src="captchaCode" alt="验证码" style="width: 100%; height: 100%;">
            <span v-else>加载中...</span>
          </div>
        </div>
      </div>
      <button type="button" class="login-btn" @click="handleLogin">登录</button>
    </form>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {getCodeImg} from "@/api/login.js";

// 表单数据
const form = ref({
  username: '',
  password: '',
  captcha: ''
});

// 验证码
const captchaCode = ref('');

// 获取验证码
const getCaptcha = () => {
  getCodeImg().then(res => {
    // 确保 Base64 数据格式正确
    if (res.data.img) {
      // 检查是否已经包含 data:image 前缀
      if (res.data.img.startsWith('data:image')) {
        captchaCode.value = res.data.img;
      } else {
        // 添加 data:image/png;base64, 前缀
        captchaCode.value = 'data:image/png;base64,' + res.data.img;
      }
    }
  }).catch(err => {
    console.error('获取验证码失败:', err);
  });
};

// 刷新验证码
const refreshCaptcha = () => {
  getCaptcha();
};

onMounted(() => {
  // 初始化获取验证码
  getCaptcha();
});

// 登录处理
const handleLogin = () => {
  console.log('登录信息:', form.value);
  // 这里可以添加登录逻辑
};
</script>

<style scoped>
/* 基础样式 */
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-size: 14px;
  font-weight: 500;
}

input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  background-color: white;
}

.captcha-container {
  display: flex;
  gap: 10px;
}

.captcha-container input {
  flex: 1;
}

.captcha-image {
  width: 100px;
  height: 36px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.login-btn {
  padding: 10px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
}

.login-btn:hover {
  background-color: #66b1ff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .login-container {
    max-width: 90%;
    margin: 20px auto;
    padding: 15px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  .login-form {
    gap: 12px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
  }
  
  .captcha-image {
    width: 90px;
    height: 40px;
  }
  
  .login-btn {
    padding: 12px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .login-container {
    max-width: 95%;
    padding: 12px;
  }
  
  h2 {
    font-size: 18px;
  }
  
  .captcha-container {
    gap: 8px;
  }
  
  .captcha-image {
    width: 80px;
    height: 36px;
  }
  
  input {
    font-size: 14px;
  }
}

/* 移动端适配 */
@media (max-width: 360px) {
  .login-container {
    padding: 10px;
  }
  
  h2 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .login-form {
    gap: 10px;
  }
  
  .form-item {
    gap: 3px;
  }
  
  label {
    font-size: 12px;
  }
  
  input {
    padding: 8px;
    font-size: 13px;
  }
  
  .captcha-image {
    width: 70px;
    height: 32px;
    font-size: 14px;
  }
  
  .login-btn {
    padding: 10px;
    font-size: 14px;
  }
}

/* 大屏幕适配 */
@media (min-width: 1200px) {
  .login-container {
    max-width: 450px;
    padding: 25px;
  }
  
  h2 {
    font-size: 28px;
  }
  
  input {
    padding: 10px 14px;
    font-size: 15px;
  }
  
  .login-btn {
    padding: 12px;
    font-size: 15px;
  }
}
</style>
