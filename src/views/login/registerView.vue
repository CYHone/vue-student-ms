<template>
  <div>
    <el-container>
      <el-header>
        <div style="text-align: center; font-size: 40px; font-weight: bolder">学生信息管理系统</div>
      </el-header>

      <el-main>
        <el-card class="register-module">
          <template v-slot:header>
            <div class="clearfix">
              <span style="text-align: center; font-size: 30px; font-family: 'Microsoft YaHei'">
                <p>注册</p>
              </span>
            </div>
          </template>

          <div>
            <el-form :model="ruleForm" :rules="rules" label-width="100px">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>

              <el-form-item label="学号" prop="ID">
                <el-input v-model="ruleForm.ID"></el-input>
              </el-form-item>

              <el-form-item label="班级" prop="className">
                <el-input v-model="ruleForm.className"></el-input>
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>

              <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
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
                <el-button type="primary" @click="register">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router'
// import { axios } from '@/utils/axios-config.js'
import axios from '@/utils/axios-config.js'

const ruleForm = ref({
  ID: '',
  name: '',
  className: '',
  email: '',
  phone: '',
  password: ''
})

// // 清空表单数据
// const clearForm = () => {
//   // 遍历 ruleForm 中的每个属性，将其值重置为空字符串
//   for (const key in ruleForm.value) {
//     ruleForm.value[key] = ''
//   }
// }

// const rules = {
//   name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
//   ID: [{ required: true, message: '请输入学号', trigger: 'blur' }],
//   class: [{ required: true, message: '请输入班级', trigger: 'blur' }],
//   Email: [
//     { required: true, message: '请输入邮箱', trigger: 'blur' },
//     { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
//   ],
//   phone: [
//     { required: true, message: '请输入手机号码', trigger: 'blur' },
//     { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码', trigger: ['blur', 'change'] }
//   ],
//   password: [
//     { required: true, message: '请输入密码', trigger: 'blur' },
//     { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
//   ],
//   confirmPassword: [
//     { required: true, message: '请再次输入密码', trigger: 'blur' },
//     {
//       validator: (rule, value, callback) => {
//         const password = ruleForm.value.password
//         if (value === '') {
//           // 如果确认密码为空，则验证通过
//           callback()
//         } else if (value === password) {
//           // 如果确认密码与密码匹配，验证通过
//           callback()
//         } else {
//           // 如果确认密码与密码不匹配，验证失败
//           callback(new Error('两次输入的密码不一致'))
//         }
//       },
//       trigger: 'blur'
//     }
//   ]
// }

const register = () => {
  const requestData = {
    id: Number(ruleForm.value.ID),
    name: ruleForm.value.name,
    email: ruleForm.value.email,
    className: ruleForm.value.className,
    phone: ruleForm.value.phone,
    password: ruleForm.value.password
  }

  console.log(
    '请求数据' +
      requestData.id +
      ' ' +
      requestData.name +
      ' ' +
      requestData.className +
      ' ' +
      requestData.email +
      ' ' +
      requestData.phone +
      ' ' +
      requestData.password
  )

  axios.post('student/addStudent', requestData).then(function (response) {
    console.log('学生注册信息：' + response.data)
  })
}
</script>

<style>
.register-module {
  max-width: 400px;
  margin: 50px auto;
}
</style>
