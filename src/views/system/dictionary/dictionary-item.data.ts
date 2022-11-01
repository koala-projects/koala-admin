import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '字典项名称',
    dataIndex: 'name',
  },
  {
    title: '字典内容',
    dataIndex: 'content',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典项名称',
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
    label: '字典项名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'content',
    label: '字典项内容',
    component: 'Input',
    required: true,
  },
];
