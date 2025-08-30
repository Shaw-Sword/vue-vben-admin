import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:home',
      title: $t('page.home.title'),
    },
    name: 'Home',
    path: '/home',
    redirect: '/home/index',
    children: [
      {
        name: 'HomeIndex',
        path: '/home/index',
        component: () => import('#/views/home/index.vue'),
        meta: {
          icon: 'mdi:home',
          title: $t('page.home.index'),
        },
      },
      {
        name: 'HomeT1',
        path: '/home/home_t1',
        component: () => import('#/views/home/t1/index.vue'),
        meta: {
          icon: 'mdi:home',
          title: 't1树形表格',
        },
      },
    ],
  },
];

export default routes;
