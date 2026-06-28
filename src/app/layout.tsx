import { ReactNode } from 'react';
import GlobalStyle from '@/themes/globalStyle';
import { ThemeProviderContext } from '@/contexts/themeProviders';
import StyledComponentsRegistry from '@/lib/registry';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Heloisa C. Silva',
};

export default async function RootLayout({ children }: { children: ReactNode; params: { locale: string } }) {
  return (
    <html lang={'pt-br'}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderContext>
            <GlobalStyle />
            <Analytics/>
            {children}
          </ThemeProviderContext>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
