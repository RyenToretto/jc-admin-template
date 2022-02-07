<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
</script>

<template>
  <div class="admin">
    <menu-component />
    <div class="content">
      <navbar />

      <history-link />

      <div class="page-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    }
  }
}
</script>

<style lang="scss" scoped>
.admin {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .content {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    background-color: rgba(243, 244, 246, 1);
    flex: 1;
  }
}
</style>
