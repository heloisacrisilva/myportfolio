import { NextRequest, NextResponse } from 'next/server';
import CONSTANTS from './config/constants.mjs';

const { LOCALE_COOKIE_NAME, LOCALES, DEFAULT_LOCALE_SYSTEM } = CONSTANTS;

const preserveParams = (params: URLSearchParams, url: URL) => {
  params.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  return url;
};

const validateCookie = (cookie: string | undefined) => {
  if (cookie) {
    if (LOCALES.some((locale) => locale === cookie)) {
      return cookie;
    }

    console.warn('[WARN] Invalid cookie value, switching to default');
    return DEFAULT_LOCALE_SYSTEM;
  }

  console.warn('[WARN] No cookies detected, switching to default');
  return DEFAULT_LOCALE_SYSTEM.split('-')[0];
};

export default function middleware(request: NextRequest) {
  try {
    const regex = '/([^/]*?)(?:/|$)';
    const { pathname, searchParams } = request.nextUrl;
    const cookieLocale = validateCookie(request.cookies.get(LOCALE_COOKIE_NAME)?.value);

    const match = pathname.match(regex);
    const localePrefixExists = LOCALES.some((locale) => pathname.startsWith(`/${locale}`)) || (match && match[1].length === 2);

    if (pathname === '/') {
      const newUrl = new URL(`/${cookieLocale}`, request.url);
      const newUrlWithParams = preserveParams(searchParams, newUrl);
      return NextResponse.redirect(newUrlWithParams);
    }

    // Se existe um prefixo de idioma e é o preferido pelo usuário
    if (localePrefixExists && pathname.startsWith(`/${cookieLocale}`)) {
      return NextResponse.next();
    }

    // Se existe um prefixo de idioma mas não é o preferido pelo usuário
    if (localePrefixExists && !pathname.startsWith(`/${cookieLocale}`)) {
      const newUrl = new URL(`/${cookieLocale}${pathname.substring(3)}`, request.url);
      const newUrlWithParams = preserveParams(searchParams, newUrl);
      return NextResponse.redirect(newUrlWithParams);
    }

    // Se não existe um prefixo de idioma
    const newUrl = new URL(`/${cookieLocale}${pathname}`, request.url);
    const newUrlWithParams = preserveParams(searchParams, newUrl);
    return NextResponse.redirect(newUrlWithParams);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error);
      return new NextResponse('Erro interno no servidor (tipo inválido)', { status: 500 });
    }

    // Logar erros inesperados e redirecionar para a página de erro
    console.log(error);
  }
}

export const config = {
  matcher: ['/((?!api|server|_next/static|_next/image|favicon.ico|fonts|images).*)', '/'],
};
