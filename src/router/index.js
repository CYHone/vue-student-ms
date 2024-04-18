import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/login/loginView.vue'
import registerView from '@/views/login/registerView.vue'
import testView from '../views/login/testView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 随便定义的首页
      path: '/',
      name: 'index',
      component: loginView,
      redirect: '/login'
    },
    {
      // 登陆页
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      // 注册页
      path: '/register',
      name: 'register',
      component: registerView
    },
    {
      // test
      path: '/test',
      name: 'test',
      component: testView
    }
  ]
})

export default router
