import clsx from 'clsx';
import { NextRouter } from 'next/router';

import UnstyledLink from '../links/UnstyledLink';

export function NavigationList(
  router: NextRouter,
  item: { name: string; href: string }
) {
  const isActivePath = router.asPath === item.href;
  return (
    <UnstyledLink
      key={item.name}
      href={item.href}
      className={clsx(
        isActivePath
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50',
        'group flex items-center rounded-md px-3 py-1 text-sm font-medium'
      )}
      aria-current={isActivePath ? 'page' : undefined}
    >
      <span>{item.name}</span>
    </UnstyledLink>
  );
}
