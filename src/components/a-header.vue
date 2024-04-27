<template>
  <div class="header-container">
    <el-icon><House /></el-icon>
    <span class="class-name">admin </span>

    <el-icon><SwitchButton /></el-icon>
    <el-button type="text" class="logout-button" @click="out()">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'r-header',
  data() {
    return {
      name: null,
      currentTerm: null
    }
  },
  methods: {
    out() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.class-name,
.user-name,
.user-email {
  font-size: 18px;
  color: #333333;
}

.logout-button {
  color: #333333;
  font-size: 18px;
}
</style>
