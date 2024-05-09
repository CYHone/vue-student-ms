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

            <RouterLink to="/teacherHome">
              <el-menu-item index="1-1">个人信息</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">课程管理</span>
            </template>

            <RouterLink to="/teacherCourse">
              <el-menu-item index="2-1">我的课程</el-menu-item>
            </RouterLink>

            <RouterLink to="/buildCourse">
              <el-menu-item index="2-2">开设课程</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">学生成绩管理</span>
            </template>

            <RouterLink to="/inquireGrade">
              <el-menu-item index="3-1">查询成绩</el-menu-item>
            </RouterLink>

            <RouterLink to="/inputGrade">
              <el-menu-item index="3-2">录入成绩</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">报表统计</span>
            </template>

            <RouterLink to="/gradeEchart">
              <el-menu-item index="4-1">成绩分析</el-menu-item>
            </RouterLink>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">个人设置</span>
            </template>
            <router-link to="/updateTeacherInfo">
              <el-menu-item index="5-1">信息修改</el-menu-item>
            </router-link>

            <RouterLink to="/teacherAvatar">
              <el-menu-item index="5-2">头像修改</el-menu-item>
            </RouterLink>
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
