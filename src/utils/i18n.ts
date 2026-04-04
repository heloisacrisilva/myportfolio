import en from '../locale/en.json'
import pt from '../locale/pt.json';
import CONSTANTS from '../config/constants.mjs';

interface Translations {
  [page: string]: {
    [key: string]: string;
  };
}

const locales: { [locale: string]: Translations } = { en, pt };
const defaultLocale = CONSTANTS.DEFAULT_LOCALE_SYSTEM;

export const getTranslation = (locale: string, page: string) => {
  const lang = locales[locale] || locales[defaultLocale];

  return (key: string, variables?: Record<string, string>): string => {
    try {
      let translation = lang[page]?.[key] || key;

      if (variables) {
        Object.entries(variables).forEach(([varKey, value]) => {
          const placeholder = `{${varKey}}`;
          translation = translation.replaceAll(placeholder, value);
        });
      }

      return translation;
    } catch (error) {
      console.error('[Erro em i18n.ts]:', error);
      return key;
    }
  };
};