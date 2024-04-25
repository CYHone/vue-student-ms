<template>
  <div>
    <h1>我的成绩</h1>
    <el-card style="height: 500px; width: 800px">
      <el-table :data="grades" style="width: 100%" max-height="250">
        <el-table-column fixed prop="courseID" label="课程号" width="150" />
        <el-table-column prop="id" label="学号" width="120" />
        <el-table-column prop="score" label="分数" width="120" />
      </el-table>
    </el-card>
    <!-- <EchartsView :subjects="echarts.subjects" :scores="echarts.scores" /> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'

const grades = ref([])
const studentId = localStorage.getItem('id')

onMounted(() => {
  axios
    .post('student/grade', studentId)
    .then((response) => {
      grades.value = response.data
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
})
</script>
