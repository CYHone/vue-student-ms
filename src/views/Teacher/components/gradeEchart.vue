<template>
  <div style="margin-bottom: 20px">
    <el-input v-model="CourseID" style="width: 240px" placeholder="请输入课程号" />
    <el-button type="primary" @click="handleSearch">查询</el-button>
  </div>

  <div id="container" style="width: 800px; height: 500px"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'

const grades = ref([])
const CourseID = ref('')

async function fetchDataAndRenderChart() {
  try {
    CourseID.value = parseInt(CourseID.value)
    // 发送异步请求，获取学生成绩数据
    const response = await axios.post('teacher/searchCourse', { CourseID: CourseID.value })
    grades.value = response.data

    // 初始化 echarts 实例，绘制图表
    const myChart = echarts.init(document.getElementById('container'))
    const option = {
      title: { text: '分数统计图' },
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: grades.value.map((item) => item.courseID)
      },
      yAxis: { type: 'value' },
      series: [
        {
          data: grades.value.map((item) => item.score),
          type: 'line'
        }
      ]
    }
    myChart.setOption(option)
  } catch (error) {
    console.error('获取课程数据时出错：', error)
  }
}

onMounted(() => {
  // 初始化时可以考虑是否需要加载默认数据
})

const handleSearch = () => {
  fetchDataAndRenderChart()
}
</script>
