'use client';

import { useRouter } from 'next/navigation';
import { Button } from './style';
import CONSTANTS from '@/config/constants.mjs';
import { getCookie, setCookie } from '@/utils/cookies.client';

const { DEFAULT_LOCALE_DISPLAY } = CONSTANTS;

interface iLanguage {
  lang: string;
}

const LanguageButton = ({ lang }: iLanguage) => {
  const router = useRouter();
  const locale = getCookie('locale');

  const isDefault = lang === DEFAULT_LOCALE_DISPLAY && !locale;
  const isSelected = (locale && lang.split('-')[0] === locale) || isDefault;

  function handleLangChange() {
    setCookie('locale', lang.split('-')[0]);
    router.refresh();
  }

  return (
    <Button $selected={!!isSelected} onClick={handleLangChange}>
      {lang}
    </Button>
  );
};

export default LanguageButton;
