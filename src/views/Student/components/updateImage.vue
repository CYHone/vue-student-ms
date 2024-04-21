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
            action="http://localhost:8080/file/upload/img"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
          >
            <!-- 显示已上传的头像图片 -->
            <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar" />
            <!-- 如果没有上传头像，则显示上传图标 -->
            <i v-else class="el-icon-plus avatar-uploader-icon">点击修改图片</i>
          </el-upload>
        </el-card>
        <el-card style="width: 500px">
          <img :src="ruleForm.currentImage" class="avatar" />
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 假设您有一个名为 ruleForm 的响应式表单
const ruleForm = ref({
  avatar: null,
  currentImage: localStorage.getItem('imageInfo')
})

// 处理上传成功的回调函数
const handleAvatarSuccess = (res) => {
  // 如果返回的数据是字符串，则认为是上传成功后的头像 URL
  if (typeof res === 'string') {
    ruleForm.value.avatar = res
    //console.log('上传成功，头像 URL:', res)
    localStorage.setItem('imageInfo', res)
  } else {
    // 如果返回的数据格式不符合预期，则输出错误信息
    console.error('上传成功，但返回的数据格式不符合预期:', res)
  }
}
</script>

<style scoped>
.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 28px;
  color: #8c939d;
  width: 250px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar-uploader-icon:hover {
  border-color: #409eff;
}
.avatar {
  width: 250px;
  height: 150px;
  display: block;
}
</style>
