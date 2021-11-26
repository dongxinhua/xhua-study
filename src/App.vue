<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/profile">我的</router-link>
    <router-view />
    <Count />
  </div>
</template>

<script setup>
import Count from './common/components/Count.vue';
</script>
