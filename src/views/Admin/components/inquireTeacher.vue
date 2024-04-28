<template>
  <h1>查询教师档案</h1>
  <div class="searchCourse">
    <el-input
      v-model="input"
      style="max-width: 600px"
      placeholder="请输入进行搜索"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="选择类型" style="width: 115px">
          <el-option label="教师号" value="teacherID" />
          <el-option label="姓名" value="teacherName" />
          <el-option label="邮箱" value="email" />
        </el-select>
      </template>
      <template #append>
        <el-button @click="handleSearch" icon="search" />
      </template>
    </el-input>
  </div>
  <br />
  <el-card>
    <div>{{ teacher.teacherID }}</div>
    <div>{{ teacher.teacherName }}</div>
    <div>{{ teacher.email }}</div>
    <div>{{ teacher.phoneNumber }}</div>
    <div>{{ teacher.avatar }}</div>
  </el-card>
  <el-card>
    <el-table :data="courses" style="width: 100%" max-height="600px">
      <el-table-column fixed prop="time" label="上课时间" width="150" />
      <el-table-column prop="teacherID" label="教师号" width="100" />
      <el-table-column prop="courseID" label="课程号" width="100" />
      <el-table-column prop="teacherName" label="授课教师" width="100" />
      <el-table-column prop="classroom" label="上课地点" width="100" />
      <el-table-column prop="courseName" label="课程名" width="100" />
      <el-table-column prop="introduce" label="介绍" width="200" />
      <el-table-column prop="credit" label="学分" width="50" />
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCourses"
    >
    </el-pagination>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'
const select = ref('教师号')
const input = ref('')
const courses = ref([])
const teacher = ref({})
const currentPage = ref(1)
const pageSize = ref(5) // 默认每页显示 10 条数据
const totalCourses = ref(0)

const handleSearch = () => {
  fetchData()
}
// 获取所有数据
const fetchData = () => {
  const searchData = {
    keyword: input.value,
    type: select.value
  }
  axios
    .post('admin/inquireTeacher', searchData)
    .then((response) => {
      console.log('获取的数据', response.data)
      courses.value = response.data.courses
      teacher.value = response.data.teacher
      //   totalCourses.value = response.data.totalCount
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
}

//挂载数据
onMounted(fetchData)

const handleSizeChange = (val) => {
  pageSize.value = val
  fetchData()
}
const handleCurrentChange = (val) => {
  currentPage.value = val
  fetchData()
}
</script>
