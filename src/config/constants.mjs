// Locales usados no middleware
const LOCALES = ['pt', 'en'];
const LOCALE_COOKIE_NAME = 'locale';

// Locales usados na config do next
const AVAILABLE_LOCALES = ['pt-br', 'en-us'];
const DEFAULT_LOCALE_DISPLAY = 'pt-br';
const DEFAULT_LOCALE_SYSTEM = DEFAULT_LOCALE_DISPLAY.split('-')[0];

const CONFIG = { AVAILABLE_LOCALES, DEFAULT_LOCALE_DISPLAY, LOCALE_COOKIE_NAME, LOCALES, DEFAULT_LOCALE_SYSTEM };

export default CONFIG;