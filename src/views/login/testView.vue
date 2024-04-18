<script setup>
import { ref } from 'vue'
import axios from 'axios'
const ruleForm = ref({
  Email: '',
  verificationCode: ''
})

// const requestData = {
//   Email: ruleForm.value.Email
// }

const sendVerificationCode = () => {
  const encodedEmail = encodeURIComponent(ruleForm.value.Email)
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
</script>

<template>
  <div>
    <el-container>
      <el-header style="background-color: skyblue; height: 100px">
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
            <el-form>
              <el-form-item label="邮箱" prop="Email">
                <el-input v-model="ruleForm.Email" placeholder="请输入邮箱"></el-input>
              </el-form-item>

              <el-form-item label="验证码" prop="verificationCode">
                <el-input
                  v-model="ruleForm.verificationCode"
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
.register-module {
  max-width: 400px;
  height: 600px;
  margin: 0px auto;
}
</style>
