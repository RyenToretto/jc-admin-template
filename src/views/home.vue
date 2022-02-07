<template>
  <div class="home-page">
    <el-row>
      <el-col :span="6" class="home-aside">
        <div class="home-info">
          <AsideInfo />
        </div>
      </el-col>

      <el-col :span="18" class="home-box">
        <div class="home-content">
          <HelloWorld msg="props" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import AsideInfo from '@/components/AsideInfo.vue'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style lang="scss" scoped>
.home-page {
  box-sizing: border-box;
  .home-aside {
    box-sizing: border-box;
    position: relative;
    background-color: #374151;
    .home-info {
      box-sizing: border-box;
      padding: 30px 0;
      position: sticky;
      top: 0;
    }
  }
  .home-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .home-content {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      min-height: 100vh;
      flex: 1;
    }
  }
}
</style>
