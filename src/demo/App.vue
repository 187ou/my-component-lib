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

    <!-- 可添加其他组件测试 -->
  </div>
</template>

<script setup lang="ts">
// 按需引入组件（可选，用于测试按需引入）
import { MyButton } from '../index'
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
