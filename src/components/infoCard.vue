<template>
  <el-card>
    <el-descriptions title="我的信息">
      <el-descriptions-item label="学号:">{{ id }}</el-descriptions-item>
      <el-descriptions-item label="姓名:">{{ name }}</el-descriptions-item>
      <el-descriptions-item label="班级:">{{ className }} </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  name: 'infoCard',
  data() {
    return {
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name'),
      className: localStorage.getItem('className')
    }
  }
}
</script>

<style scoped></style>
