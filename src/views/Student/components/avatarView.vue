<template>
  <div>
    <!-- 头像上传组件 -->
    <el-container>
      <el-main>
        <el-card style="width: 500px">
          <!-- el-upload 组件用于上传文件 -->
          <!-- 上传文件的接口地址 -->
          <!-- 是否显示已上传文件列表 -->
          <!-- 上传成功的回调函数 -->
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/uploadAvatar"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            name="image"
            :data="{ studentId: studentId }"
            ><!-- 添加name属性，确保正确提交图片数据 -->
            <!-- 显示已上传的头像图片 -->
            <!-- 使用 v-if 条件渲染，确保只有在 imageUrl 有值时才显示图片 -->
            <img
              style="width: 300px; height: 300px"
              v-if="imageUrl"
              :src="imageUrl"
              alt="avatar"
              class="avatar"
            />
            <!-- 如果没有上传头像，则显示上传图标 -->
            <i class="el-icon-plus avatar-uploader-icon">点击修改图片</i>
          </el-upload>
        </el-card>
        <!-- <el-card style="width: 500px">
          <el-button type="primary" @click="get">得到头像</el-button>
          <img :src="imageUrl.value" alt="avatar" class="avatar" />
        </el-card> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null, // 存储图片 URL
      studentId: localStorage.getItem('id')
    }
  },
  methods: {
    handleAvatarSuccess(response) {
      // 上传成功后，设置 imageUrl 为返回的图片 URL，从而显示头像
      this.imageUrl = response
      localStorage.setItem('image', response)
    }
  }
}
</script>

<!-- <script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const imageUrl = ref({
  value: localStorage.getItem('image') // 初始化为localStorage中存储的图片   :data="{ studentId: studentId }"
})
const studentId = localStorage.getItem('id')

// 处理上传成功的回调函数
const handleAvatarSuccess = (res) => {
  console.log(res)
  // 在上传成功后更新imageUrl的值为服务器返回的图片URL
  imageUrl.value = res.data
  // 同时存储到localStorage中，以便下次页面加载时使用
  localStorage.setItem('image', res.data)
}

const get = () => {
  axios.post('http://localhost:8080/getAvatar', { studentId: studentId }).then((res) => {
    console.log(res)
    console.log(res.data)
  })
}
</script> -->

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
