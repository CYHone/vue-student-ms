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
            <router-link to="/studentHome">
              <el-menu-item index="1-1">信息</el-menu-item>
            </router-link>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">选课管理</span>
            </template>
            <router-link to="/showCourse">
              <el-menu-item index="2-1">所有课程</el-menu-item>
            </router-link>
            <router-link to="/selectCourse">
              <el-menu-item index="2-2">选课</el-menu-item>
            </router-link>
            <router-link to="/courseView">
              <el-menu-item index="2-3">我的课表</el-menu-item>
            </router-link>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">成绩管理</span>
            </template>
            <RouterLink to="/gradeView">
              <el-menu-item index="3-1">成绩查询</el-menu-item>
            </RouterLink>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">报表统计</span>
            </template>
            <RouterLink to="/EchartsView">
              <el-menu-item index="4-1">分数统计图</el-menu-item>
            </RouterLink>
            <!-- <RouterLink to="/showView">
              <el-menu-item index="4-2">展示</el-menu-item>
            </RouterLink> -->
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon style="color: #ffffff"><Menu /></el-icon
              ><span style="color: #ffffff">个人设置</span>
            </template>
            <router-link to="/updateStudentInfo">
              <el-menu-item index="5-1">信息修改</el-menu-item>
            </router-link>
            <!-- <router-link to="/updateImage">
              <el-menu-item index="5-2">头像上传</el-menu-item>
            </router-link> -->
            <RouterLink to="/avatarView">
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
