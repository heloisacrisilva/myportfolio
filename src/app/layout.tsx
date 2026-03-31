import { ReactNode } from 'react';
import { ProvidersWrapper } from './ProviderWrapper';
import GlobalStyle from '@/themes/globalStyle';
import { ThemeProviderContext } from '@/contexts/themeProviders';

export const metadata = {
  title: 'Portfólio - Heloisa C. Silva',
};

export default async function RootLayout({ children }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  return (
    <ThemeProviderContext>
      <GlobalStyle/>
      <html lang={'pt-br'}>
        <body>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </body>
      </html>
    </ThemeProviderContext>
  );
}
