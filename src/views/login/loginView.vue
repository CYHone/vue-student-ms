<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2>学生信息管理系统</h2>
      <el-form-item label="账号：" prop="email">
        <el-input v-model="ruleForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="submitForm()">登录</el-button>
        <el-button class="login-btn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/axios-config.js'
const ruleForm = ref({
  email: '',
  password: ''
})

const submitForm = () => {
  const requestData = {
    email: ruleForm.value.email,
    password: ruleForm.value.password
  }

  console.log('请求数据' + requestData.email + ' ' + requestData.password)

  axios.post('student/login', requestData).then(function (response) {
    console.log('学生注册信息：' + response.data)
  })
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url('@/assets/login-bg.jpg');
  text-align: center;
  padding: 1px;
  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    background: #ffffff;
    padding: 40px;
    border-radius: 5px;
  }
  .login-btn {
    width: 48%;
  }
  h2 {
    margin-bottom: 20px;
  }
}
</style>
