# Icon 图标

提供了一套常用的图标集合。

## 基础用法

直接通过设置 `name` 属性来使用对应的图标。

:::demo
```vue
<template>
  <my-icon name="search"></my-icon>
  <my-icon name="edit"></my-icon>
  <my-icon name="delete"></my-icon>
  <my-icon name="success"></my-icon>
  <my-icon name="warning"></my-icon>
</template>


:::demo
<template>
  <my-icon name="search" size="16px"></my-icon>
  <my-icon name="search" size="24px"></my-icon>
  <my-icon name="search" size="32px"></my-icon>
  <my-icon name="search" size="40px"></my-icon>
</template>

:::demo
<template>
  <my-icon name="search" color="#409eff"></my-icon>
  <my-icon name="search" color="#67c23a"></my-icon>
  <my-icon name="search" color="#e6a23c"></my-icon>
  <my-icon name="search" color="#f56c6c"></my-icon>
</template>

:::demo
<template>
  <my-button type="primary" icon="search">搜索</my-button>
  <my-button type="success" icon="success">成功</my-button>
  <my-button type="warning" icon="warning">警告</my-button>
  <my-button type="danger" icon="delete">删除</my-button>
</template>

:::demo
<template>
  <my-input v-model="value" placeholder="搜索" prefix-icon="search"></my-input>
  <br /><br />
  <my-input v-model="value" placeholder="密码" type="password" suffix-icon="warning"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
