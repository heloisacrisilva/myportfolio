import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  locale: locale || 'pt',
  messages: (await import(`../locale/${locale || 'pt'}.json`)).default,
}));
