import request from '@/utils/axios-config.js'

export const login = (email, password) => {
  return request({
    url: '/login', // 登录接口的地址
    method: 'post',
    data: {
      email,
      password
    }
  })
}
