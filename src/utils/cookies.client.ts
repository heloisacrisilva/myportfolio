'use client';

export const getCookie = (cookieName: string) => {
  if (typeof document !== 'undefined') {
    const cookie = document.cookie.split('; ').find((c) => c.startsWith(cookieName));
    return cookie ? cookie.split('=')[1] : '';
  }
  return '';
};

export const setCookie = (cookieName: string, value: string) => {
  if (typeof document !== 'undefined') {
    document.cookie = `${cookieName}=${value}; Path=/`;
  }
};  