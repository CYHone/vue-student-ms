import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:10086/', // 设置基础URL
  timeout: 50000, // 设置请求超时时间
  headers: {
    // 设置公共请求头
    'Content-Type': 'application/json'
    // 如果需要设置其他请求头，可以在这里添加
  }
})

export default instance
