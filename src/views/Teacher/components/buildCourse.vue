<script setup>
import { ref } from 'vue'
//import axios from '@/utils/axios-config.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const ruleForm = ref({
  courseName: null,
  teacherID: parseInt(localStorage.getItem('teacherID')),
  credit: null,
  time: null,
  classroom: null,
  teacherName: null,
  introduce: null
})

const doRegister = () => {
  console.log(ruleForm.value)
  axios
    .post('http://127.0.0.1:8080/teacher/buildCourse', ruleForm.value, {
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
        <div style="text-align: center; font-size: 40px; font-weight: bolder">开设课程</div>
      </el-header>

      <el-main>
        <el-card class="register-module">
          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="课程名称" prop="courseName">
                <el-input v-model="ruleForm.courseName" placeholder="请输入课程名称"></el-input>
              </el-form-item>

              <el-form-item label="学分" prop="credit">
                <el-input v-model="ruleForm.credit" placeholder="请输入学分"></el-input>
              </el-form-item>
              <el-form-item label="上课时间" prop="time">
                <el-input v-model="ruleForm.time" placeholder="请输入上课时间"></el-input>
              </el-form-item>

              <el-form-item label="教室地址" prop="classroom">
                <el-input v-model="ruleForm.classroom" placeholder="请输入教室地址"></el-input>
              </el-form-item>

              <el-form-item label="教师名字" prop="teacherName">
                <el-input v-model="ruleForm.teacherName" placeholder="请输入教师名字"></el-input>
              </el-form-item>

              <el-form-item label="课程介绍" prop="introduce">
                <el-input v-model="ruleForm.introduce" placeholder="请输入课程介绍"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="success"
                  style="width: 100px; height: 40px; font-size: 18px"
                  @click="doRegister"
                  >开设</el-button
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
