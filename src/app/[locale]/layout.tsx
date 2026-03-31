import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { GlobalStyle } from "../[locale]/globals";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Portfólio - Heloisa C. Silva",
};

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let messages;

  try {
    messages = (await import(`../../locale/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <main>
              {children}
            </main>
            <GlobalStyle />
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}