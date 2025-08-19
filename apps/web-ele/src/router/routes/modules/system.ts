import type { RouteRecordRaw } from 'vue-router';

import { VBEN_LOGO_URL } from '@vben/constants';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:user',
      title: $t('page.system.title'),
    },
    name: 'SystemHome',
    path: '/system',
    redirect: '/system/user',
    children: [
      {
        name: 'SystemUser',
        path: '/system/user',
        component: () => import('#/views/system/user/index.vue'),
        meta: {
          icon: 'mdi:home',
          title: $t('page.system.user'),
        },
      },
      {
        name: 'SystemMenu',
        path: '/system/menu',
        component: () => import('#/views/system/menu/index.vue'),
        meta: {
          icon: 'mdi:menu',
          title: $t('page.system.menu'),
        },
      },
    ],
  },
];

export default routes;
