<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { listDepartmentTree } from '/@/apis/departments';

  const treeData = ref<TreeItem[]>([]);

  async function fetch() {
    treeData.value = (await listDepartmentTree()) as unknown as TreeItem[];
  }

  const emit = defineEmits(['select']);

  function handleSelect(keys: string[]) {
    emit('select', keys[0]);
  }

  onMounted(() => {
    fetch();
  });
</script>
<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <basic-tree
      title="部门列表"
      toolbar
      search
      tree-wrapper-class-name="h-[calc(100%-35px)] overflow-auto"
      :click-row-to-expand="false"
      :tree-data="treeData"
      :field-names="{ key: 'id', title: 'name' }"
      @select="handleSelect"
    />
  </div>
</template>
