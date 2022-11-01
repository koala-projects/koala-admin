import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
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
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典名称',
    component: 'Input',
    colProps: {
      xl: 12,
      xxl: 8,
    },
  },
  {
    field: 'code',
    label: '字典代码',
    component: 'Input',
    colProps: {
      xl: 12,
      xxl: 8,
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: '字典代码',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '字典描述',
    component: 'InputTextArea',
  },
];
