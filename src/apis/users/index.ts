import { defHttp } from '/@/utils/http/axios';

import type { SearchParameters, PageResult } from '/@/apis/models';
import type { UserEntity } from './models/UserEntity';

const domain = '/users';

export function listUsers(params: SearchParameters) {
  return defHttp.get<PageResult<UserEntity>>({ url: domain, params }, { joinParamsToUrl: true });
}

export function loadUser(id: string) {
  return defHttp.get<UserEntity>({ url: `${domain}/${id}` });
}

export function createUser(data: UserEntity) {
  return defHttp.post<UserEntity>({ url: domain, data });
}

export function updateUser(id: string, data: UserEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deleteUser(id: string) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export { UserEntity };
