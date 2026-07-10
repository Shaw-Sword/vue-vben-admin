<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

const columns = ref([
  {
    key: 'no',
    title: 'No',
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'length',
    title: 'Length',
  },
]);
const data = [
  { length: '4:18', no: 3, title: 'Wonderwall' },
  { length: '4:48', no: 4, title: "Don't Look Back in Anger" },
  { length: '7:27', no: 12, title: 'Champagne Supernova' },
];
// console.log(columns, data);
</script>

<template>
  <!-- <Page
    description="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
    title="NDataTable"
  >
    <NDataTable :columns="columns" :data="data" >
      <template #loading></template>
    </NDataTable>
  </Page> -->
  <Page>
    <div>1</div>
    <div>{{ columns[0]?.key }},{{ data[0]?.title }}</div>
  </Page>
</template>

<style scoped></style>
