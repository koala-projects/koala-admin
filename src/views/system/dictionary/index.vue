<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';

  import DictionaryModal from './DictionaryModal.vue';

  import { listDictionaries, deleteDictionary } from '/@/apis/dictionaries';

  const [register, { reload }] = useTable({
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
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: undefined,
    },
    api: listDictionaries,
    showIndexColumn: false,
    bordered: true,
    canResize: false,
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
  const [registerModal, { openModal }] = useModal();

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleSetting(record: Recordable) {
    console.log('设置字典项', record);
  }

  async function handleDelete(record: Recordable) {
    await deleteDictionary(record.id);
    reload();
  }

  function handleSuccess() {
    reload();
  }
</script>
<template>
  <div>
    <basic-table @register="register">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增字典 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <table-action
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:setting-outlined',
                onClick: handleSetting.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </basic-table>
    <dictionary-modal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
