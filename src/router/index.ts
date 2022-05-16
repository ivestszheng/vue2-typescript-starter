import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

// 修复重复跳转路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (originalPush.call(this, location) as any).catch((err: any) => err);
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/compositionApi',
    name: 'CompositionApi',
    component: () => import('@/views/CompositionApi.vue'),
  },
  {
    path: '/axiosUse',
    name: 'AxiosUse',
    component: () => import('@/views/AxiosUse.vue'),
  },
  {
    path: '/lessMixin',
    name: 'LessMixin',
    component: () => import('@/views/LessMixin.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
