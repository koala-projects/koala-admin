<script lang="ts" setup>
  import { BasicTable, useTable } from '/@/components/Table';

  import { listDictionaries } from '/@/apis/dictionaries';

  const [register] = useTable({
    columns: [
      {
        title: '字典名称',
        dataIndex: 'name',
      },
      {
        title: '字典代码',
        dataIndex: 'code',
      },
      {
        title: '字典描述',
        dataIndex: 'description',
      },
    ],
    api: listDictionaries,
    useSearchForm: true,
    formConfig: {
      labelWidth: 100,
      schemas: [
        {
          field: `name`,
          label: `字典名称`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
        {
          field: `code`,
          label: `字典代码`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
      ],
    },
  });
</script>
<template>
  <basic-table @register="register" />
</template>
