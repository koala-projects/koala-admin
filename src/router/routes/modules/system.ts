import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 1,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'user',
      name: 'User',
      meta: {
        title: t('routes.system.user'),
        ignoreKeepAlive: false,
        permissions: ['user:read', 'user:write'],
      },
      component: () => import('/@/views/system/user/index.vue'),
    },
    {
      path: 'role',
      name: 'Role',
      meta: {
        title: t('routes.system.role'),
        ignoreKeepAlive: true,
        permissions: ['role:read', 'role:write'],
      },
      component: () => import('/@/views/system/role/index.vue'),
    },
    {
      path: 'department',
      name: 'Department',
      meta: {
        title: t('routes.system.department'),
        ignoreKeepAlive: true,
        permissions: ['department:read', 'department:write'],
      },
      component: () => import('/@/views/system/department/index.vue'),
    },
    {
      path: 'dictionary',
      name: 'Dictionary',
      meta: {
        title: t('routes.system.dictionary'),
        ignoreKeepAlive: true,
        permissions: ['dictionary:read', 'dictionary:write'],
      },
      component: () => import('/@/views/system/dictionary/index.vue'),
    },
  ],
};

export default system;
