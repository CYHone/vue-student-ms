<template>
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
          <el-button type="primary" @click="open(scope.row)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from '@/utils/axios-config.js'

const courses = ref([])
onMounted(() => {
  axios
    .post('student/courses')
    .then((response) => {
      console.log(response.data)
      courses.value = response.data
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
})

const open = (row) => {
  ElMessageBox.confirm('你确定要选择该课程吗？', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(() => {
      console.log('确定')
      console.log(row)
      console.log('课程号' + row.courseID)
      const studentId = localStorage.getItem('id')
      console.log('学生号' + studentId)
      const requestData = { courseID: row.courseID, studentID: studentId }
      axios
        .post('student/selectCourse', requestData)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error('选择课程时出错：', error)
        })
      ElMessage({
        type: 'success',
        message: '选择成功'
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
