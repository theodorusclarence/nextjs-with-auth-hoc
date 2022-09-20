import * as React from 'react';

import clsxm from '@/lib/clsxm';

type TryAlertProps = {
  withoutTitle?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TryAlert({
  className,
  children,
  withoutTitle = false,
  ...rest
}: TryAlertProps) {
  return (
    <div
      className={clsxm(
        'not-prose w-max max-w-full rounded border border-slate-200 bg-slate-100 py-3 px-5 text-sm shadow-sm',
        className
      )}
      {...rest}
    >
      {!withoutTitle && <p className='text-base font-semibold'>Try it out!</p>}
      {children}
    </div>
  );
}
