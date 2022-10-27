import { oauth2Http } from '/@/utils/http/axios';
import qs from 'qs';

import { OAuth2TokenRequest } from './models/OAuth2TokenRequest';
import { OAuth2TokenResponse } from './models/OAuth2TokenResponse';

export function loginByPassowrd(data: { username: string; password: string }) {
  return token({
    ...data,
    grant_type: 'password',
    client_id: import.meta.env.VITE_GLOB_OAUTH2_CLIENT_ID,
    client_secret: import.meta.env.VITE_GLOB_OAUTH2_CLIENT_SECRET,
  });
}

export function token(data: OAuth2TokenRequest) {
  return oauth2Http.post<OAuth2TokenResponse>({
    url: '/token',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
  });
}
