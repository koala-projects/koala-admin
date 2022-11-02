import { defHttp } from '/@/utils/http/axios';

import type { SearchParameters, PageResult } from '/@/apis/models';
import type { RoleEntity } from './models/RoleEntity';

const domain = '/roles';

export function listRoles(params: SearchParameters) {
  return defHttp.get<PageResult<RoleEntity>>({ url: domain, params }, { joinParamsToUrl: true });
}

export function loadRole(id: string) {
  return defHttp.get<RoleEntity>({ url: `${domain}/${id}` });
}

export function createRole(data: RoleEntity) {
  return defHttp.post<RoleEntity>({ url: domain, data });
}

export function updateRole(id: string, data: RoleEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deleteRole(id: string) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export function listRolePermissionIds(id: string) {
  return defHttp.get<string[]>({ url: `${domain}/${id}/permission-ids` });
}

export function setRolePermissionIds(id: string, permissionIds: string[]) {
  return defHttp.put<null>({ url: `${domain}/${id}/permission-ids`, data: permissionIds });
}

export { RoleEntity };
