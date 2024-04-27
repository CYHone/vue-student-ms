<template>
  <div>
    <el-aside
      width="200px"
      style="background-color: #304057; height: 700px; border: 1px solid #eee"
    >
      <el-scrollbar>
        <!-- <el-menu :default-openeds="['1', '3']" style="background-color: #304057"> -->
        <el-menu style="background-color: #304057">
          <el-sub-menu index="1">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">主页</span>
            </template>

            <RouterLink to="/adminHome">
              <el-menu-item index="1-1">个人信息</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">用户管理</span>
            </template>

            <RouterLink to="/changePassword">
              <el-menu-item index="2-1">老师密码修改</el-menu-item>
            </RouterLink>
            <RouterLink to="/changeStudentPwd">
              <el-menu-item index="2-2">学生密码修改</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">教师档案</span>
            </template>

            <RouterLink to="/inquireGrade">
              <el-menu-item index="3-1">查询老师</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">学生档案</span>
            </template>

            <RouterLink to="/gradeEchart">
              <el-menu-item index="4-1">查询学生</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">课程管理</span>
            </template>
            <router-link to="/updateTeacherInfo">
              <el-menu-item index="5-1">排课</el-menu-item>
            </router-link>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script setup></script>

<style scoped>
/* 给二级选项框添加背景色和白色字体 */
.el-menu-item {
  background-color: #202d3d !important;
  color: #ffffff !important;
}
</style>
