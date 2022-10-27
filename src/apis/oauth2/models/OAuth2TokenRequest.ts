export interface OAuth2TokenRequest {
  grant_type: string;
  username?: string;
  password?: string;
  client_id?: string;
  client_secret?: string;
}
