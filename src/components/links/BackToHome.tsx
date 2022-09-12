import * as React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import ArrowLink, { ArrowLinkProps } from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';

type BackToHomeProps = Omit<ArrowLinkProps<'a'>, 'href' | 'children'>;

export default function BackToHome({ className, ...rest }: BackToHomeProps) {
  return (
    <ArrowLink
      href='/'
      as={PrimaryLink}
      direction='left'
      className={clsxm('gap-1 p-2 pl-0 text-lg', className)}
      spanClassName='flex gap-1.5 items-end'
      {...rest}
    >
      <HiOutlineHome className='text-xl' />
      <span className='-mb-px text-sm tracking-wider'>HOME</span>
    </ArrowLink>
  );
}
