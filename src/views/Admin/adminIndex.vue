<template>
  <div>
    <el-container>
      <el-header
        style="
          height: 40px;
          text-align: right;
          font-size: 18px;
          background-color: steelblue;
          border-radius: 3px;
        "
      >
        <a-header></a-header>
      </el-header>
      <el-container>
        <a-aside></a-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import aHeader from '@/components/a-header.vue'
import aAside from '@/components/a-aside.vue'
</script>

<style scoped></style>
