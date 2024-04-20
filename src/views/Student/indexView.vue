<template>
  <div>
    <el-container>
      <!-- <rHeader /> -->
      <el-header
        style="
          height: 40px;
          text-align: right;
          font-size: 18px;
          background-color: steelblue;
          border-radius: 3px;
        "
      >
        <r-header></r-header>
      </el-header>
      <el-container>
        <r-aside></r-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import rHeader from '@/components/r-header.vue'
import rAside from '@/components/r-aside.vue'
</script>

<style scoped></style>
