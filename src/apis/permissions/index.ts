import { defHttp } from '/@/utils/http/axios';

import type { SearchParameters, PageResult } from '/@/apis/models';
import type { PermissionEntity } from './models/PermissionEntity';

const domain = '/permissions';

export function listPermissions(params: SearchParameters) {
  return defHttp.get<PageResult<PermissionEntity>>(
    { url: domain, params },
    { joinParamsToUrl: true },
  );
}

export function loadPermission(id: string) {
  return defHttp.get<PermissionEntity>({ url: `${domain}/${id}` });
}

export function createPermission(data: PermissionEntity) {
  return defHttp.post<PermissionEntity>({ url: domain, data });
}

export function updatePermission(id: string, data: PermissionEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deletePermission(id: string) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export { PermissionEntity };
