<template>
  <!-- 在模板中定义一个容器用于显示图表 -->
  <div id="container" style="width: 800px; height: 500px"></div>
</template>

<script setup>
import * as echarts from 'echarts' // 导入 echarts 库
import { ref, onMounted } from 'vue' // 导入 ref 和 onMounted 函数
import axios from '@/utils/axios-config.js' // 导入 axios 库

// 声明一个响应式变量 grades 来存储学生成绩数据，初始化为空数组
const grades = ref([])
// 获取当前学生的 ID
const studentId = localStorage.getItem('id')

// 在组件挂载完成后执行的逻辑
onMounted(async () => {
  try {
    // 发送异步请求，获取学生成绩数据
    const response = await axios.post('student/grade', studentId)
    // 将获取到的学生成绩数据赋值给 grades 变量
    grades.value = response.data

    // 初始化 echarts 实例，绑定到容器上
    var myChart = echarts.init(document.getElementById('container'))
    // 配置图表的参数
    const option = {
      title: {
        text: '分数统计图' // 图表标题
      },
      toolbox: {
        feature: {
          saveAsImage: {} // 工具栏，提供保存图片功能
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: grades.value.map((item) => item.courseID) // X 轴数据，课程号
        }
      ],
      yAxis: [
        {
          type: 'value' // Y 轴数据，分数
        }
      ],
      series: [
        {
          data: grades.value.map((item) => item.score), // 数据系列，学生成绩
          type: 'line' // 折线图
        }
      ]
    }
    // 将配置参数设置到图表中
    await myChart.setOption(option)
  } catch (error) {
    // 若请求失败，输出错误信息到控制台
    console.error('获取课程数据时出错：', error)
  }
})
</script>

<!-- <template>
  <div id="container" style="width: 800px; height: 500px"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'
const grades = ref([])
const studentId = localStorage.getItem('id')

onMounted(() => {
  axios
    .post('student/grade', studentId)
    .then((response) => {
      grades.value = response.data
      for (let i = 0; i < grades.value.length; i++) {
        console.log(grades.value[i].score)
      }
      for (let i = 0; i < grades.value.length; i++) {
        console.log(grades.value[i].score)
      }
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
})

onMounted(async () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('container'))

  // 绘制图表
  const option = {
    title: {
      text: '分数统计图'
    },
    // 工具栏 下载图片
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: grades.value.courseID
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        data: grades.value.score,
        type: 'line'
      }
    ]
  }

  await myChart.setOption(option)
})
</script> -->

<!-- <template>
  <div id="container" style="width: 800px; height: 500px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/axios-config.js'
import * as echarts from 'echarts'

const grades = ref([])
const studentId = localStorage.getItem('id')

onMounted(() => {
  axios
    .post('student/grade', studentId)
    .then((response) => {
      console.log('返回' + response.data)
      //   for (let i = 0; i < response.data.length; i++) {
      //     console.log(response.data[i])
      //   }
      grades.value = response.data
    })
    .catch((error) => {
      console.error('获取课程数据时出错：', error)
    })
})
for (let i = 0; i < grades.value.length; i++) {
  console.log(grades.value)
  

onMounted(async () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('container'))

  // 绘制图表
  const option = {
    title: {
      text: '分数统计图'
    },
    // 工具栏 下载图片
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['a', 'b'] // 由于props中的数据无法直接访问，这里先留空
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        data: [98, 96], // 由于props中的数据无法直接访问，这里先留空
        type: 'line'
      }
    ]
  }

  await myChart.setOption(option)
})
</script> -->
