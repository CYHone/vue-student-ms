<script setup>
import { ref } from 'vue'
import axios from '@/utils/axios-config.js'
//import { ElMessage } from 'element-plus'
const ruleForm = ref({
  teacherName: '',
  teacherID: '',
  password: '',
  confirmPassword: ''
})

const submitForm = () => {
  console.log(ruleForm.value)
  axios
    .post('admin/updateTeacher', ruleForm.value, {
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
    teacherName: '',
    teacherID: '',
    password: '',
    checkPass: ''
  }
}

const goBack = () => {
  // 返回上一页或执行其他操作
}
</script>

<template>
  <h1>老师密码修改</h1>
  <div>
    <el-container>
      <el-main>
        <el-card style="width: 500px">
          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="姓名" prop="teacherName">
                <el-input v-model="ruleForm.teacherName" placeholder="请输入姓名"></el-input>
              </el-form-item>

              <el-form-item label="教师号" prop="teacherID">
                <el-input v-model="ruleForm.teacherID" placeholder="请输入教师号"></el-input>
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
                <el-button type="success" @click="submitForm">提交</el-button>
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
