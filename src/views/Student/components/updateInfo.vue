<script setup>
import { ref } from 'vue'
import axios from '@/utils/axios-config.js'
//import { ElMessage } from 'element-plus'
const ruleForm = ref({
  id: localStorage.getItem('id'),
  name: localStorage.getItem('name'),
  phone: localStorage.getItem('phone'),
  email: localStorage.getItem('email'),
  password: '',
  confirmPassword: ''
})

const submitForm = () => {
  console.log(ruleForm.value)
  axios
    .post('student/updateStudent', ruleForm.value, {
      withCredentials: true // 添加这一行配置
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

const resetForm = () => {
  ruleForm.value = {
    name: '',
    email: '',
    phone: '',
    password: '',
    checkPass: ''
  }
}

const goBack = () => {
  // 返回上一页或执行其他操作
}
</script>

<template>
  <div>
    <el-container>
      <el-main>
        <el-card style="width: 500px">
          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
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
              <el-form-item>
                <el-button type="success" @click="submitForm">修改</el-button>
                <el-button type="primary" @click="resetForm">重置</el-button>
                <el-button @click="goBack">返回</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.register-module {
  max-width: 400px;
  height: 600px;
  margin: 0px auto;
}
</style>
