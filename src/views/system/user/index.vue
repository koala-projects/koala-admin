<script lang="ts" setup>
  import { ref, unref } from 'vue';

  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';

  import DepartmentTree from './DepartmentTree.vue';
  import UserModal from './UserModal.vue';

  import { columns, searchFormSchema } from './user.data';

  import { listUsers, deleteUser } from '/@/apis/users';

  const departmentId = ref<Nullable<string>>(null);

  function handleSelect(id: Nullable<string>) {
    departmentId.value = id;
    reload();
  }

  const [registerModal, { openModal }] = useModal();

  const [registerTable, { reload }] = useTable({
    title: '账号列表',
    columns,
    rowKey: 'id',
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    canResize: false,
    bordered: true,
    api: (args) => {
      return listUsers({ ...args, departmentId: unref(departmentId) });
    },
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
    },
  });

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

  async function handleDelete(record: Recordable) {
    await deleteUser(record.id);
    reload();
  }

  function handleSuccess() {
    reload();
  }
</script>
<template>
  <page-wrapper dense content-full-height fixed-height content-class="flex">
    <department-tree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <basic-table @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <table-action
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
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
    <user-modal @register="registerModal" @success="handleSuccess" />
  </page-wrapper>
</template>
