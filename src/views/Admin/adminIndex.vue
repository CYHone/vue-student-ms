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
        <t-header></t-header>
      </el-header>
      <el-container>
        <t-aside></t-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import tHeader from '@/components/t-header.vue'
import tAside from '@/components/t-aside.vue'
</script>

<style scoped></style>
