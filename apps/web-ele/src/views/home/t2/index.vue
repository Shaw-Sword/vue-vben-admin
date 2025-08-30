<script lang="ts" setup>
// import type { DemoTableApi } from '../mock-api';

import type { VxeGridProps } from '#/adapter/vxe-table';

import { alert, VbenButton } from '@vben/common-ui';

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

/**
 * 获取示例表格数据
 */

const gridOptions: VxeGridProps<RowType> = {
  checkboxConfig: {
    highlight: true,
    labelField: 'name',
  },
  border: true,
  columns: [
    { title: '序号', type: 'seq', width: 80 },
    {
      // align: 'left',
      title: 'name',
      type: 'checkbox',
      width: 180,
      treeNode: true,
    },
    { field: 'path', title: 'path', width: 180 },
    { field: 'icon', title: 'icon', width: 180 },
    { field: 'type', title: 'type', width: 180 },
    {
      field: 'createTime',
      formatter: 'formatDateTime',
      title: 'DateTime',
      width: 200,
    },
    {
      field: 'action',
      fixed: 'right',
      slots: { default: 'action' },
      title: '操作',
      width: 120,
    },
  ],
  treeConfig: {
    transform: true, // 指定表格为树形表格
    parentField: 'parentId', // 父节点字段名
    rowField: 'id', // 行数据字段名
  },
  rowConfig: {
    isHover: true,
  },
  exportConfig: {},
  pagerConfig: {
    enabled: false,
  },
  // height: 'auto', // 如果设置为 auto，则必须确保存在父节点且不允许存在相邻元素，否则会出现高度闪动问题
  keepSource: true,
  proxyConfig: {
    ajax: {
      query: async () => {
        const res = await ipcCall('menu.menu_list', { msg: 'no' });
        return { items: res };
      },
    },
  },
  toolbarConfig: {
    custom: true,
    export: true,
    import: true,
    refresh: true,
    zoom: true,
  },
};

const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions,
});

const expandAll = () => {
  gridApi.grid?.setAllTreeExpand(true);
};

const collapseAll = () => {
  gridApi.grid?.setAllTreeExpand(false);
};
</script>

<template>
  <div class="vp-raw w-full">
    <Grid>
      <template #toolbar-tools>
        <Button class="mr-2" type="primary" @click="expandAll">
          展开全部
        </Button>
        <Button type="primary" @click="collapseAll"> 折叠全部 </Button>
        <VbenButton class="mr-2" type="primary" @click="() => gridApi.query()">
          刷新当前页面
        </VbenButton>
        <VbenButton type="primary" @click="() => gridApi.reload()">
          刷新并返回第一页
        </VbenButton>
      </template>
      <template #action="{ row }">
        <VbenButton
          class="mr-2"
          type="primary"
          size="sm"
          @click="() => alert({ content: JSON.stringify(row) })"
        >
          查看详情
        </VbenButton>
      </template>
    </Grid>
  </div>
</template>
