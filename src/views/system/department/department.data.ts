import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: ['data', 'name'],
  },
  {
    title: '部门代码',
    dataIndex: ['data', 'code'],
  },
  {
    title: '部门描述',
    dataIndex: ['data', 'description'],
  },
  {
    title: '上级部门',
    dataIndex: ['data', 'parent', 'name'],
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: '部门代码',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '部门描述',
    component: 'InputTextArea',
  },
  {
    field: 'parentId',
    label: '上级部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
];
