import { YesNo } from '/@/enums';

export interface UserEntity {
  id?: string;
  username: string;
  nickname: string;
  avatar: string;
  isSystem: YesNo;
}
