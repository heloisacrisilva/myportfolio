import { ReactNode } from 'react';
import GlobalStyle from '@/themes/globalStyle';
import { ThemeProviderContext } from '@/contexts/themeProviders';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata = {
  title: 'Portfólio - Heloisa C. Silva',
};

export default async function RootLayout({ children }: { children: ReactNode; params: { locale: string } }) {
  return (
    <html lang={'pt-br'}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderContext>
            <GlobalStyle />
            {children}
          </ThemeProviderContext>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
