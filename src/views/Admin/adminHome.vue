<template>
  <div>
    <el-container class="container">
      <el-main>
        <el-card>
          <!-- 轮播图容器 -->
          <div class="carousel-container">
            <!-- 轮播图内容 -->
            <div class="block text-center">
              <!-- <span class="demonstration">轮播图</span> -->
              <!-- 轮播图组件 -->
              <el-carousel height="600px" motion-blur :interval="2000">
                <el-carousel-item v-for="(item, index) in imageList" :key="index">
                  <!-- 图片 -->
                  <img :src="item.src" :alt="'Slide ' + index" class="carousel-image" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-card>
        <!-- <logout></logout> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// import infoCard from '@/components/infoCard.vue'
//import logout from '@/components/logoutView.vue'
const imageList = [
  { src: 'src/assets/image/1.png' },
  { src: 'src/assets/image/2.png' }
  // Add more images as needed
]
</script>
<style scoped>
.container {
  /* background-image: url('@/assets/image.png'); */
  height: 600px;
}
.carousel-container {
  height: 500px;
  width: 1000px;
}
/* 轮播图图片样式 */
.carousel-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>
