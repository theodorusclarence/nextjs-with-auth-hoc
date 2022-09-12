import * as React from 'react';
import Highlight, { HighlightProps } from 'react-highlight';

import 'highlight.js/styles/nord.css';

import clsxm from '@/lib/clsxm';

type StyledCodeProps = HighlightProps;

export default function StyledCode({
  className,
  children,
  ...rest
}: StyledCodeProps) {
  return (
    <Highlight className={clsxm(className)} {...rest}>
      {children}
    </Highlight>
  );
}
