/*
 * @Descripttion:
 * @Date: 2022-05-24 16:14:15
 * @LastEditTime: 2022-06-20 15:18:27
 */
/* eslint-disable */
import { defineStore } from 'pinia';

export const useMainStore = defineStore('store', {
  state: () => {
    return {
      count: 0,
      name: '小红',
      phone: '15139333888',
    };
  },
  getters: {
    phoneHidden(state) {
      console.log('getters 被调用');

      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
    },
  },
  actions: {
    increment() {
      // 这里不要用箭头函数
      this.count++;
      this.name = '无声';
    },
  },
});
