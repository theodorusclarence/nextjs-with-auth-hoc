import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Vercel from '~/svg/Vercel.svg';

type LogoProps = React.ComponentPropsWithoutRef<'div'>;

export default function Logo({ className, ...rest }: LogoProps) {
  return (
    <div className={clsxm('', className)} {...rest}>
      <Vercel className='h-8 w-8 md:h-10 md:w-10' />
    </div>
  );
}
