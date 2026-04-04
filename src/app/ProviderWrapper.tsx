import { ReactNode } from 'react';
import { ThemeProviderContext } from '@/contexts/themeProviders';
import GlobalStyle from '@/themes/globalStyle';
import StyledComponentsRegistry from '@/lib/registry';

export async function ProvidersWrapper({ children, }: { children: ReactNode }) {

  return (
    <ThemeProviderContext>
      <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProviderContext>
  );
}
