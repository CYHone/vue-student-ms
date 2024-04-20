<template>
  <div>
    <el-popconfirm
      confirmButtonText="好的"
      cancelButtonText="不用了"
      icon="el-icon-info"
      icon-color="red"
      title="确定退出登录吗？"
      @confirm="handleLogout"
    >
      <template #reference>
        <el-button type="danger" style="margin-top: 10px" round @click="showPopconfirm">
          退出登录
        </el-button>
      </template>
    </el-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const popconfirmRef = ref(null)

const showPopconfirm = () => {
  popconfirmRef.value.open()
}

const handleLogout = () => {
  //sessionStorage.removeItem('token')
  router.push('/')
}
</script>

<style scoped></style>
