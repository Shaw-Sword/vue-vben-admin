<script setup lang="ts">
import { h } from 'vue';

import { alert, Page, VbenButton } from '@vben/common-ui';

// import { Result } from 'antdv-next';

function showAlert() {
  alert('This is an alert message');
}

function showIconAlert() {
  alert({
    content: 'This is an alert message with icon',
    icon: 'success',
  });
}

function showCustomAlert() {
  alert({
    buttonAlign: 'center',
    content: h('div', {
      status: 'success',
      subTitle: '已成功创建订单。订单ID：2017182818828182881',
      title: '操作成功',
    }),
  });
}
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
  <Page title="测试页面">
    <template #default>
      <div>1</div>
      <div>aaa</div>
      <div class="flex gap-4">
        <VbenButton @click="showAlert">Alert</VbenButton>
        <VbenButton @click="showIconAlert">Alert With Icon</VbenButton>
        <VbenButton @click="showCustomAlert">
          Alert With Custom Content
        </VbenButton>
      </div>
    </template>

    <template #description>
      <div>描述</div>
    </template>
    <template #extra>
      <div>额外信息</div>
    </template>
    <template #footer>
      <div>底部</div>
    </template>
  </Page>
</template>

<style scoped></style>
