<template>
  <div>
    <el-container>
      <el-main>
        <h1>学生管理系统</h1>
        <infoCard></infoCard>
        <el-card style="width: 100%; margin-top: 10px">
          <p><i class="el-icon-s-home" style="margin-right: 18px"></i>项目名：学生管理系统</p>
          <p><i class="el-icon-s-custom" style="margin-right: 18px"></i>作者：auggie</p>
          <p><i class="el-icon-location-outline" style="margin-right: 18px"></i>HMU</p>
          <p><i class="el-icon-chat-round" style="margin-right: 18px"></i>QQ: 1434919953</p>
          <p><i class="el-icon-error" style="margin-right: 18px"></i>仅供学习，禁止抄袭</p>
        </el-card>
        <logout></logout>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import infoCard from '@/components/infoCard.vue'
import logout from '@/components/logoutView.vue'
</script>
