import { defHttp } from '/@/utils/http/axios';

import { GrantedAuthority } from './models/GrantedAuthority';
import { UserDetailsEntity } from './models/UserDetailsEntity';

enum URL {
  userinfo = '/userinfo',
}

export function getUserInfo() {
  return defHttp.get<UserDetailsEntity>({ url: URL.userinfo });
}

export { GrantedAuthority, UserDetailsEntity };
