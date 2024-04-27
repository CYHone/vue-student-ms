<script setup>
import { ref } from 'vue'
//import axios from '@/utils/axios-config.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const ruleForm = ref({
  id: null,
  courseID: null,
  score: null
})

const doRegister = () => {
  console.log(ruleForm.value)
  axios
    .post('http://127.0.0.1:8080/teacher/inputGrade', ruleForm.value, {
      withCredentials: true // 添加这一行配置
    })
    .then((response) => {
      console.log(response.data)
      if (response.data === true) {
        ElMessage({ type: 'success', message: '开设成功' })
      } else {
        ElMessage({ type: 'error', message: '开设失败' })
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
        <div style="text-align: center; font-size: 40px; font-weight: bolder">录入成绩</div>
      </el-header>

      <el-main>
        <el-card class="register-module">
          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="学号" prop="id">
                <el-input v-model="ruleForm.id" placeholder="请输入学生学号"></el-input>
              </el-form-item>

              <el-form-item label="课程号" prop="courseID">
                <el-input v-model="ruleForm.courseID" placeholder="请输入课程号"></el-input>
              </el-form-item>
              <el-form-item label="分数" prop="score">
                <el-input v-model="ruleForm.score" placeholder="请输入分数"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="success"
                  style="width: 100px; height: 40px; font-size: 18px"
                  @click="doRegister"
                  >录入</el-button
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
  height: 400px;
  margin: 0px auto;
}
</style>
