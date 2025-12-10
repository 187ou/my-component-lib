<!-- src/demo/App.vue -->
<template>
  <div class="demo-container">
    <h1>My Component Lib Demo</h1>

    <section class="demo-section">
      <h2>Button 组件测试</h2>
      <div class="demo-buttons">
        <lin-button>默认按钮</lin-button>
        <lin-button type="success">成功按钮</lin-button>
        <lin-button type="warning" size="large">大号警告按钮</lin-button>
        <lin-button type="danger" disabled>禁用按钮</lin-button>
        <lin-button loading>加载中按钮</lin-button>
      </div>
    </section>

    <div>
      <h2>Icon 组件</h2>
      <lin-icon name="search" size="24px" color="#409eff"></lin-icon>
      <lin-icon name="edit" size="24px" color="#67c23a"></lin-icon>

      <h2>Button 集成 Icon</h2>
      <lin-button type="primary" icon="search">搜索按钮</lin-button>

      <h2>Input 集成 Icon</h2>
      <lin-input v-model="inputValue" placeholder="搜索" prefix-icon="search" clearable></lin-input>

      <h2>Link 集成 Icon</h2>
      <lin-link href="#" icon="edit">百度一下</lin-link>

      <h2>Avatar 测试</h2>
      <div class="demo-avatars">
        <lin-avatar src="https://placehold.co/150x150.png" :size="64" />
        <lin-avatar icon="user" :size="64" />
        <lin-avatar text="Alice" :size="64" />
      </div>

      <h2>Card 组件</h2>
      <lin-card header="标题" sub-header="副标题" :hoverable="true" shadow="hover">
        这里是卡片内容
        <template #footer>
          <lin-button size="small">操作</lin-button>
        </template>
      </lin-card>

    </div>
  </div>
</template>

<script setup lang="ts">
import { LinButton, LinIcon, LinInput, LinLink, LinAvatar, LinCard } from '../index'
import {ref} from "vue";

const inputValue = ref('')
</script>


<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin: 40px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.demo-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-avatars {
  display: flex;
  gap: 24px;
  align-items: center;
}
</style>
