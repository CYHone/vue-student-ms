import { createRouter, createWebHistory } from 'vue-router'
import selectView from '@/views/login/selectView.vue'
import loginView from '../views/login/loginView.vue'
import registerView from '@/views/login/registerView.vue'
//import testView from '../views/login/testView.vue'
import studentIndex from '@/views/Student/indexView.vue'
import studentHome from '@/views/Student/homeView.vue'
import updateStudentInfo from '@/views/Student/components/updateInfo.vue'
// import updateImage from '@/views/Student/components/updateImage.vue'
import selectCourse from '@/views/Student/components/selectCourse.vue'
import courseView from '@/views/Student/components/courseView.vue'
import gradeView from '@/views/Student/components/gradeView.vue'
import EchartsView from '@/views/Student/components/EchartsView.vue'
// import showView from '@/views/Student/components/showView.vue'
import avatarView from '@/views/Student/components/avatarView.vue'
import showCourse from '@/views/Student/components/showCourse.vue'
import teacherRegister from '@/views/login/teacherRegister.vue'
import teacherLogin from '@/views/login/teacherLogin.vue'
import teacherHome from '@/views/Teacher/teacherHome.vue'
import teacherIndex from '@/views/Teacher/teacherIndex.vue'
import updateTeacherInfo from '@/views/Teacher/components/updateTeacherInfo.vue'
import teacherAvatar from '@/views/Teacher/components/teacherAvatar.vue'
import teacherCourse from '@/views/Teacher/components/teacherCourse.vue'
import buildCourse from '@/views/Teacher/components/buildCourse.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 随便定义的首页
      path: '/',
      name: 'selectView',
      component: selectView
      // redirect: '/login'
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
          path: '/selectCourse',
          name: 'selectCourse',
          component: selectCourse
        },
        // 课程
        {
          path: '/courseView',
          name: 'courseView',
          component: courseView
        },
        // 成绩
        {
          path: '/gradeView',
          name: 'gradeView',
          component: gradeView
        },
        // 图表
        {
          path: '/EchartsView',
          name: 'EchartsView',
          component: EchartsView
        },
        //头像
        {
          path: '/avatarView',
          name: 'avatarView',
          component: avatarView
        },
        // 课程展示
        {
          path: '/showCourse',
          name: 'showCourse',
          component: showCourse
        }
      ]
    },
    // 教师注册
    {
      path: '/teacherRegister',
      name: 'teacherRegister',
      component: teacherRegister
    },
    // 教师登录
    {
      path: '/teacherLogin',
      name: 'teacherLogin',
      component: teacherLogin
    },
    {
      // 教师主页
      path: '/teacherIndex',
      name: 'teacherIndex',
      component: teacherIndex,
      children: [
        {
          path: '/teacherHome',
          name: 'teacherHome',
          component: teacherHome
        },
        {
          path: '/updateTeacherInfo',
          name: 'updateTeacherInfo',
          component: updateTeacherInfo
        },
        {
          path: '/teacherAvatar',
          name: 'teacherAvatar',
          component: teacherAvatar
        },
        {
          path: '/teacherCourse',
          name: 'teacherCourse',
          component: teacherCourse
        },
        {
          path: '/buildCourse',
          name: 'buildCourse',
          component: buildCourse
        }
      ]
    }
  ]
})

export default router
