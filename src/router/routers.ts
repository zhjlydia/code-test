/** @format */

import { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
  },
  {
    path: '/test-key',
    name: 'TestKey',
    meta: {
      title: 'key测试'
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () =>
      import(/* webpackChunkName: "testKey" */ '@/views/test-key/index.vue')
  },
  {
    path: '/align-center',
    name: 'AlignCenter',
    meta: {
      title: 'key测试'
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () =>
      import(
        /* webpackChunkName: "alignCenter" */ '@/views/align-center/index.vue'
      )
  },
  {
    path: '/flex',
    name: 'Flex',
    meta: {
      title: 'flex布局'
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () =>
      import(/* webpackChunkName: "flex" */ '@/views/flex/index.vue')
  }
]
