<template>
  <h1>查询学生档案</h1>
  <div class="searchCourse">
    <el-input
      v-model="input"
      style="max-width: 600px"
      placeholder="请输入进行搜索"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="选择类型" style="width: 115px">
          <el-option label="学号" value="id" />
          <el-option label="姓名" value="name" />
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
    <div>{{ student.id }}</div>
    <div>{{ student.name }}</div>
    <div>{{ student.email }}</div>
    <div>{{ student.className }}</div>
    <div>{{ student.phone }}</div>
    <div>{{ student.avatar }}</div>
  </el-card>
  <el-card>
    <el-table :data="grades" style="width: 100%" max-height="600px">
      <el-table-column fixed prop="courseID" label="课程号" width="120" />
      <el-table-column prop="id" label="学号" width="150" />
      <el-table-column prop="score" label="分数" width="120" />
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
  <el-card>
    <el-table :data="grades" style="width: 100%" max-height="600px">
      <el-table-column fixed prop="courseID" label="课程号" width="120" />
      <el-table-column prop="id" label="学号" width="150" />
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
const select = ref('学号')
const input = ref('')
const courses = ref([])
const grades = ref([])
const student = ref({})
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
    .post('admin/inquireStudent', searchData)
    .then((response) => {
      console.log('获取的数据', response.data)
      grades.value = response.data.grades
      courses.value = response.data.courses
      student.value = response.data.student
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
