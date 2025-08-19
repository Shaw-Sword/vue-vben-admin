<script lang="ts" setup>
// import type { DemoTableApi } from '../mock-api';

import type { VxeGridProps } from '#/adapter/vxe-table';

import { VbenButton, alert } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import ipcCall from '#/api/ipc';

interface RowType {
  id: number;
  username: string;
  nickname: string;
  code: string;
  roleName: string;
  releaseDate: string;
}

const sleep = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * 获取示例表格数据
 */

const gridOptions: VxeGridProps<RowType> = {
  checkboxConfig: {
    highlight: true,
    labelField: 'username',
  },
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { align: 'left', title: 'Name', type: 'checkbox', width: 100 },
    { field: 'nickname', title: 'nickname' },
    { field: 'code', title: 'code' },
    { field: 'roleName', title: 'roleName' },
    { field: 'releaseDate', formatter: 'formatDateTime', title: 'DateTime' },
  ],
  exportConfig: {},
  // height: 'auto', // 如果设置为 auto，则必须确保存在父节点且不允许存在相邻元素，否则会出现高度闪动问题
  keepSource: true,
  proxyConfig: {
    ajax: {
      query: async ({ page }) => {
        const res = await ipcCall('user.page', {
          pageIndex: page.currentPage,
          pageSize: page.pageSize,
        });
        // console.log('res:', res);
        return { total: res.total, items: res.list };
      },
    },
  },
  toolbarConfig: {
    custom: true,
    export: true,
    // import: true,
    refresh: true,
    zoom: true,
  },
};

const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions,
});
</script>

<template>
  <div class="vp-raw w-full">
    <Grid>
      <template #toolbar-tools>
        <VbenButton class="mr-2" type="primary" @click="() => gridApi.query()">
          刷新当前页面
        </VbenButton>
        <VbenButton type="primary" @click="() => gridApi.reload()">
          刷新并返回第一页
        </VbenButton>
      </template>
    </Grid>
  </div>
</template>
