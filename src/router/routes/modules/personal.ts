import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const personal: AppRouteModule = {
  path: '/personal',
  name: 'personal',
  component: LAYOUT,
  redirect: '/personal/change-password',
  meta: {
    hideMenu: true,
    title: '个人服务',
  },
  children: [
    {
      path: 'change-password',
      name: 'ChangePassword',
      meta: {
        hideMenu: true,
        title: t('routes.personal.changePassword'),
        ignoreKeepAlive: false,
        permissions: ['personal'],
      },
      component: () => import('/@/views/personal/change-password/index.vue'),
    },
  ],
};

export default personal;
