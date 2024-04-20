import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/login/loginView.vue'
import registerView from '@/views/login/registerView.vue'
//import testView from '../views/login/testView.vue'
import studentIndex from '@/views/Student/indexView.vue'
import studentHome from '@/views/Student/homeView.vue'
import updateStudentInfo from '@/views/Student/components/updateInfo.vue'
import updateImage from '@/views/Student/components/updateImage.vue'
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
      //学生主页
      path: '/studentIndex',
      name: 'studentIndex',
      component: studentIndex,
      children: [
        {
          path: '/studentHome',
          name: 'studentHome',
          component: studentHome
        },
        {
          path: '/updateStudentInfo',
          name: 'updateStudentInfo',
          component: updateStudentInfo
        },
        {
          path: '/updateImage',
          name: 'updateImage',
          component: updateImage
        }
      ]
    }
  ]
})

export default router
