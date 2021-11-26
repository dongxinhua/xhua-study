<template>
  <div class="profile">
    {{ state.title }}
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  title: 'Profile',
});
</script>

<style lang="less" scoped>
.profile {
  box-sizing: border-box;
}
</style>
