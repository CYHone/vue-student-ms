<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" status-icon label-width="80px" class="demo-ruleForm">
      <h2>学生信息管理系统</h2>
      <h3>请选择登录身份</h3>

      <el-radio-group v-model="radio" style="margin-bottom: 20px; margin-top: 30px" size="large">
        <el-radio :value="3">学生</el-radio>
        <el-radio :value="6">教师</el-radio>
        <el-radio :value="9">管理员</el-radio>
      </el-radio-group>

      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        <el-button class="login-btn">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const radio = ref(3)
const login = () => {
  if (radio.value === 3) {
    router.push('/login')
  } else if (radio.value === 6) {
    router.push('/teacherLogin')
  } else if (radio.value === 9) {
    router.push('/adminLogin')
  } else {
    ElMessage.error('请选择登录身份')
  }
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
}
</style>
