<template>
  <div class="home">
    {{ state.title }}
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  title: 'Home',
});
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
}
</style>
