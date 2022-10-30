import { defHttp } from '/@/utils/http/axios';

import type { GrantedAuthority } from './models/GrantedAuthority';
import type { UserDetailsEntity } from './models/UserDetailsEntity';

enum URL {
  userinfo = '/userinfo',
}

export function getUserInfo() {
  return defHttp.get<UserDetailsEntity>({ url: URL.userinfo });
}

export { GrantedAuthority, UserDetailsEntity };
