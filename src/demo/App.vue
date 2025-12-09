<!-- src/demo/App.vue -->
<template>
  <div class="demo-container">
    <h1>My Component Lib Demo</h1>

    <!-- 测试 Button 组件 -->
    <section class="demo-section">
      <h2>Button 组件测试</h2>
      <div class="demo-buttons">
        <my-button>默认按钮</my-button>
        <my-button type="success">成功按钮</my-button>
        <my-button type="warning" size="large">大号警告按钮</my-button>
        <my-button type="danger" disabled>禁用按钮</my-button>
        <my-button loading>加载中按钮</my-button>
      </div>
    </section>

    <div>
      <h2>Icon 组件</h2>
      <my-icon name="search" size="24px" color="#409eff"></my-icon>
      <my-icon name="edit" size="24px" color="#67c23a"></my-icon>

      <h2>Button 集成 Icon</h2>
      <my-button type="primary" icon="search">搜索按钮</my-button>

      <h2>Input 集成 Icon</h2>
      <my-input v-model="inputValue" placeholder="搜索" prefix-icon="search" clearable></my-input>

      <h2>Link 集成 Icon</h2>
      <my-link href="#" icon="edit">百度一下</my-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 按需引入组件（可选，用于测试按需引入）
import { MyButton, MyIcon, MyInput, MyLink } from '../index'
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
</style>
