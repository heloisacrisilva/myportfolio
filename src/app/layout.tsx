import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { GlobalStyle } from "./globals";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfólio - Heloisa C. Silva",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <GlobalStyle />
        </main>
      </body>
    </html>
  );
}
