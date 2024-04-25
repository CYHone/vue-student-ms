<template>
  <div class="header-container">
    <el-icon><House /></el-icon>
    <span class="class-name">{{ className }} 班 </span>
    <img style="width: 35px; height: 35px" :src="imageUrl" alt="avatar" />
    <el-icon><User /></el-icon>
    <span class="user-name">{{ name }}</span>
    <el-icon><Message /></el-icon>
    <span class="user-email">{{ email }}</span>
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
  created() {
    this.name = localStorage.getItem('name')
    this.className = localStorage.getItem('className')
    this.email = localStorage.getItem('email')
    this.imageUrl = localStorage.getItem('image')
  },
  methods: {
    out() {
      sessionStorage.clear()
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
