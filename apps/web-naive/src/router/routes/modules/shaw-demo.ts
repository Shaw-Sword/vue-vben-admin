import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('shaw.title'),
    },
    name: 'Demos-1',
    path: '/demos-1',
    children: [
      {
        meta: {
          title: $t('demos.naive'),
        },
        name: 'NaiveDemos-1',
        path: 'naive-1',
        component: () => import('#/views/demos/naive/index.vue'),
      },
      {
        meta: {
          title: $t('demos.table'),
        },
        name: 'Table-1',
        path: 'table-1',
        component: () => import('#/views/demos/table/index.vue'),
      },
      {
        meta: {
          title: $t('demos.form'),
        },
        name: 'Form-1',
        path: 'form-1',
        component: () => import('#/views/demos/form/basic.vue'),
      },
      {
        meta: {
          title: $t('demos.arrayForm'),
        },
        name: 'ArrayForm-1',
        path: 'array-form-1',
        component: () => import('#/views/demos/naive/array-form/index.vue'),
      },
    ],
  },
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('shaw.test1.title'),
    },
    name: 'Demos-2',
    path: '/demos-2',
    children: [
      {
        meta: {
          title: $t('shaw.test1.sub_title'),
          icon: 'mdi:home',
        },
        name: 'table-2',
        path: 'table-2',
        component: () => import('#/views/shaw/table/page.vue'),
      },
      {
        meta: {
          title: $t('shaw.test1.sub_title'),
          icon: 'mdi:home',
        },
        name: 'alert-2',
        path: 'alert-2',
        component: () => import('#/views/shaw/table/alert.vue'),
      },
    ],
  },
];

export default routes;
