import * as React from 'react';
import Highlight, { HighlightProps } from 'react-highlight';

import 'highlight.js/styles/nord.css';

import clsxm from '@/lib/clsxm';

type StyledJSONProps = { data: unknown } & HighlightProps;

export default function StyledJSON({
  className,
  data,
  ...rest
}: StyledJSONProps) {
  return (
    <Highlight className={clsxm('language-json', className)} {...rest}>
      {JSON.stringify(data, null, 2)}
    </Highlight>
  );
}
