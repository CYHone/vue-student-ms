<script setup>
import { ref } from 'vue'
//import axios from '@/utils/axios-config.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const ruleForm = ref({
  id: '',
  name: '',
  className: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  code: ''
})

const sendVerificationCode = () => {
  const encodedEmail = encodeURIComponent(ruleForm.value.email)
  console.log(encodedEmail)

  axios
    .post('http://127.0.0.1:8080/student/registerCode', encodedEmail, {
      withCredentials: true // 添加这一行配置
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
const doRegister = () => {
  console.log(ruleForm.value)
  axios
    .post('http://127.0.0.1:8080/student/register', ruleForm.value, {
      withCredentials: true // 添加这一行配置
    })
    .then((response) => {
      console.log(response.data)
      if (response.data.code === 0) {
        ElMessage({ type: 'success', message: '注册成功' })
      } else {
        ElMessage({ type: 'error', message: '注册失败' })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <div class="register-container">
    <el-container>
      <el-header style="height: 50px">
        <div style="text-align: center; font-size: 40px; font-weight: bolder">学生信息管理系统</div>
      </el-header>

      <el-main>
        <el-card class="register-module">
          <template v-slot:header>
            <div class="clearfix">
              <span style="text-align: center; font-size: 20px; font-family: 'Microsoft YaHei'">
                <p>学生注册</p>
              </span>
            </div>
          </template>

          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>

              <el-form-item label="学号" prop="id">
                <el-input v-model="ruleForm.id" placeholder="请输入学号"></el-input>
              </el-form-item>
              <el-form-item label="班级" prop="className">
                <el-input v-model="ruleForm.className" placeholder="请输入班级"></el-input>
              </el-form-item>

              <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmPassword">
                <el-input
                  v-model="ruleForm.confirmPassword"
                  placeholder="请确认密码"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code">
                <el-input
                  v-model="ruleForm.code"
                  :style="{ width: '120px' }"
                  placeholder="邮箱验证码"
                ></el-input>
                <el-button type="primary" @click="sendVerificationCode">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="success"
                  style="width: 100px; height: 40px; font-size: 18px"
                  @click="doRegister"
                  >注册</el-button
                >
                <el-button
                  type="danger"
                  style="width: 100px; height: 40px; font-size: 18px"
                  @click="doReturn"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.register-container {
  background: url('@/assets/login-bg.jpg');
}
.register-module {
  max-width: 400px;
  height: 600px;
  margin: 0px auto;
}
</style>
