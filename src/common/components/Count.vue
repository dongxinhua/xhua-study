<template>
  <div class="count">
    <h2>
      当前计数: {{ state.count }}
    </h2>
    <div>
      请输入值 <input v-model="state.num" type="number" />
    </div>
    <div>
      <button @click="increment(state.num)">
        加文本框的值
      </button>
      <button @click="decrement(state.num)">
        减文本框的值
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  num: 0,
});

const increment = (val) => {
  state.count += val;
};

const decrement = (val) => {
  state.count -= val;
};
</script>

<style lang="less" scoped>
  .count {
    color: #1980ff;
    input {
      margin-bottom: 22px;
    }

    button {
      padding: 3px 10px;
      margin-right: 10px;
      border: 0;
      border-radius: 15px;
      background-color: #269577;
      color: #fff;
    }
  }
</style>
