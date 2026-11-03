import React, {type ComponentProps, type ReactNode} from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/ThemeProvider/TitleFormatter';

type FormatterProp = ComponentProps<typeof TitleFormatterProvider>['formatter'];

// Docusaurus appends " | {site title}" to every tab. The landing page
// (front matter title "Interstellar Network") should show only
// "Interstellar Network Docs", without that suffix.
const formatter: FormatterProp = (params) => {
  if (params.title?.trim() === 'Interstellar Network') {
    return 'Interstellar Network Docs';
  }
  return params.defaultFormatter(params);
};

export default function ThemeProviderTitleFormatter({
  children,
}: Props): ReactNode {
  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
