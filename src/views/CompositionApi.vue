<!--
 * @Descripttion: 
 * @Date: 2022-05-24 16:14:15
 * @LastEditTime: 2022-06-20 15:18:43
-->
<template>
  <div class="hello">
    <h1>{{ store.count }}</h1>
    <h1>{{ store.name }}</h1>
    <h1>{{ store.phoneHidden }}</h1>
    <!-- <button @click="fn1">fn1</button> -->
    <!-- <button @click="fn2">fn2</button> -->
    <!-- <button @click="fn3">fn3</button> -->
    <button @click="store.increment">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useMainStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useMainStore();
    // change Pinia data
    // method 1
    const fn1 = () => {
      store.count += 1;
    };
    // method 2 - 适合于多数据状态的改变（经过优化）
    const fn2 = () => {
      store.$patch({
        count: (store.count += 1),
        name: store.name === '小红' ? '小黑' : '小绿',
      });
    };
    // method 3 - $patch 传递函数
    const fn3 = () => {
      store.$patch((state) => {
        state.count += 1;
        state.name = store.name === '小红' ? '小黑' : '小绿';
      });
    };
    return {
      store,
      fn1,
      fn2,
      fn3,
    };
  },
});
</script>
