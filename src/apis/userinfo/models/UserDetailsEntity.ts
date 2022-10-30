import { UserEntity } from '/@/apis/users';
import { GrantedAuthority } from './GrantedAuthority';

export interface UserDetailsEntity extends UserEntity {
  authorities: GrantedAuthority[];
}
