<template>
  <ul class="my-timeline">
    <slot />
  </ul>
</template>

<script setup lang="ts">
// 仅作为容器组件
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.my-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
