import { defHttp } from '/@/utils/http/axios';

import type { ChangePasswordRequest } from './models/ChangePasswordRequest';

const domain = '/personal';

export function changePassword(data: ChangePasswordRequest) {
  return defHttp.put<null>({ url: `${domain}/change-password`, data });
}
