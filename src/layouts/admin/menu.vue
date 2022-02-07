<template>
  <div class="menu">
    <div class="logo-box">
      <i class="fas fa-robot"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu -->
    <div class="menu-container">
      <dl v-for="(menu, index) of menus" :key="index">
        <dt @click="handle(menu)">
          <section class="flex items-center">
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down" :class="{ 'rotate-180': menu.active }"></i>
          </section>
        </dt>
        <dd v-for="(cmenu, key) of menu.children" v-show="menu.active" :key="key" :class="{ active: cmenu.active }">
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menus = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-algolia',
    active: true,
    children: [{ title: '404页面', active: true }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '编辑器',
    icon: 'fab fa-app-store-ios',
    children: [{ title: 'Markdown编辑器' }, { title: '富文本编辑器' }]
  }
])

const resetMenus = () => {
  menus.value.forEach(pmenu => {
    pmenu.active = false
    pmenu.children?.forEach(m => (m.active = false))
  })
}
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenus()
  pmenu.active = true
}
</script>

<style lang="scss" scoped>
.menu {
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  overflow: auto;
  border: 0 solid rgba(229, 231, 235, 1);
  background-color: rgba(31, 41, 55, 1);
  color: rgba(209, 213, 219, 1);
}
</style>
