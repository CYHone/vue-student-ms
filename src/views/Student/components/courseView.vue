<template>
  <h1>我的课程</h1>
  <el-card>
    <el-table :data="courses" style="width: 100%" max-height="250">
      <el-table-column fixed prop="courseID" label="课程号" width="150" />
      <el-table-column prop="courseName" label="课程名" width="120" />
      <el-table-column prop="teacherID" label="教师号" width="120" />
      <el-table-column prop="teacherName" label="教师名" width="120" />
      <el-table-column prop="credit" label="学分" width="100" />
      <el-table-column prop="time" label="时间" width="150" />
      <el-table-column prop="classroom" label="地点" width="100" />
      <el-table-column prop="introduce" label="介绍" width="200" />
      <el-table-column label="操作" width="120">
        <!-- <template #default="scope">
          <el-button type="primary" size="small">选择</el-button>
        </template> -->
        <template #default="scope">
          <el-button type="danger" @click="open(scope.row)">退课</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'
import { ElMessage, ElMessageBox } from 'element-plus'

const courses = ref([])
const studentId = localStorage.getItem('id')
console.log('学生号' + studentId)
onMounted(() => {
  axios
    .post('student/myCourses', studentId) // 直接将学生ID作为请求体发送
    .then((response) => {
      console.log(response.data)
      courses.value = response.data
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
})

const open = (row) => {
  ElMessageBox.confirm('你确定要退掉该课程吗？', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(() => {
      console.log('确定')
      console.log(row)
      console.log('课程号' + row.courseID)
      const deleteCourseId = row.courseID
      axios
        .post('student/deleteCourses', deleteCourseId)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error('删除课程时出错：', error)
        })
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'warning',
        message: '选择失败'
      })
    })
}
</script>
