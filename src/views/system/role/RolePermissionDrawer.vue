<script lang="ts" setup>
  import { ref, unref } from 'vue';

  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { Row as ARow, Transfer } from 'ant-design-vue';

  import { listPermissions, PermissionEntity } from '/@/apis/permissions';
  import { listRolePermissionIds, setRolePermissionIds } from '/@/apis/roles';

  const roleId = ref<Nullable<string>>(null);
  const permissions = ref<PermissionEntity[]>([]);
  const targetKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);

  const [registerDrawer, { changeLoading, changeOkLoading, closeDrawer }] = useDrawerInner(
    async (data) => {
      changeLoading(true);
      roleId.value = data.id;
      permissions.value = (await listPermissions({ page: 0, size: 9999 })).content || [];
      targetKeys.value = (await listRolePermissionIds(data.id)) || [];
      changeLoading(false);
    },
  );

  const emit = defineEmits(['success', 'register']);

  async function handleSubmit() {
    try {
      changeOkLoading(true);
      await setRolePermissionIds(unref(roleId)!, unref(targetKeys));
      closeDrawer();
      emit('success');
    } finally {
      changeOkLoading(false);
    }
  }
</script>
<template>
  <div>
    <basic-drawer
      v-bind="$attrs"
      @register="registerDrawer"
      showFooter
      title="角色配置"
      width="600px"
      @ok="handleSubmit"
    >
      <a-row type="flex" justify="center">
        <transfer
          v-model:target-keys="targetKeys"
          v-model:selected-keys="selectedKeys"
          :data-source="permissions"
          :row-key="(permission: PermissionEntity) => permission.id"
          :titles="['全部权限', '拥有权限']"
          :render="(permission: PermissionEntity) => permission.name"
          :list-style="{ height: '600px' }"
          show-search
        />
      </a-row>
    </basic-drawer>
  </div>
</template>
