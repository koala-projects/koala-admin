import { defHttp } from '/@/utils/http/axios';

import type { SearchParameters, PageResult, TreeNode } from '/@/apis/models';
import type { DepartmentEntity } from './models/DepartmentEntity';

const domain = '/departments';

export function listDepartments(params: SearchParameters) {
  return defHttp.get<PageResult<DepartmentEntity>>(
    { url: domain, params },
    { joinParamsToUrl: true },
  );
}

export function loadDepartment(id: string) {
  return defHttp.get<DepartmentEntity>({ url: `${domain}/${id}` });
}

export function createDepartment(data: DepartmentEntity) {
  return defHttp.post<DepartmentEntity>({ url: domain, data });
}

export function updateDepartment(id: string, data: DepartmentEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deleteDepartment(id: string) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export function listDepartmentTree() {
  return defHttp.get<TreeNode<DepartmentEntity>>({ url: `${domain}/tree` });
}

export { DepartmentEntity };
