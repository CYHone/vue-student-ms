<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const ruleForm = ref({
  courseID: route.params.courseID,
  time: route.params.time,
  credit: route.params.credit,
  courseName: route.params.courseName,
  teacherName: route.params.teacherName,
  classroom: route.params.classroom,
  introduce: route.params.introduce
})

const doRegister = () => {
  console.log(ruleForm.value)
  axios
    .post('http://127.0.0.1:8080/admin/changeCourse', ruleForm.value, {
      withCredentials: true
    })
    .then((response) => {
      console.log(response.data)
      if (response.data === true) {
        ElMessage({ type: 'success', message: '修改成功' })
      } else {
        ElMessage({ type: 'error', message: '修改失败' })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

const doReturn = () => {
  router.go(-1)
}
</script>

<template>
  <div class="register-container">
    <el-container>
      <el-header style="height: 50px">
        <div style="text-align: center; font-size: 40px; font-weight: bolder">修改课程信息</div>
      </el-header>

      <el-main>
        <el-card class="register-module">
          <div>
            <el-form :model="ruleForm" label-width="100px">
              <el-form-item label="课程ID">
                <el-input v-model="ruleForm.courseID"></el-input>
              </el-form-item>

              <el-form-item label="课程名称">
                <el-input v-model="ruleForm.courseName" placeholder="请输入课程名称"></el-input>
              </el-form-item>

              <el-form-item label="学分">
                <el-input v-model="ruleForm.credit" placeholder="请输入学分"></el-input>
              </el-form-item>

              <el-form-item label="上课时间">
                <el-input v-model="ruleForm.time" placeholder="请输入上课时间"></el-input>
              </el-form-item>

              <el-form-item label="教室地址">
                <el-input v-model="ruleForm.classroom" placeholder="请输入教室地址"></el-input>
              </el-form-item>

              <el-form-item label="教师名字">
                <el-input v-model="ruleForm.teacherName" placeholder="请输入教师名字"></el-input>
              </el-form-item>

              <el-form-item label="课程介绍">
                <el-input v-model="ruleForm.introduce" placeholder="请输入课程介绍"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  style="width: 100px; height: 40px; font-size: 18px"
                  @click="doRegister"
                  >保存更改</el-button
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
