'use client';

import { useRouter } from 'next/navigation';
import { Button } from './style';
import CONSTANTS from '@/config/constants.mjs';
import { getCookie, setCookie } from '@/utils/cookies.client';

const { DEFAULT_LOCALE_DISPLAY } = CONSTANTS;

interface LanguageButtonProps {
  lang: string;
  currentLang: string;
}

const LanguageButton = ({ lang, currentLang }: LanguageButtonProps) => {
  const router = useRouter();

  const isDefault = lang === DEFAULT_LOCALE_DISPLAY && !currentLang;
  const isSelected = (currentLang && lang.split('-')[0] === currentLang) || isDefault;

  function handleLangChange() {
    const newLocale = lang.split('-')[0];

    setCookie('locale', newLocale);
    router.push(`/${newLocale}`);
  }

  return (
    <Button $selected={!!isSelected} onClick={handleLangChange}>
      {lang}
    </Button>
  );
};

export default LanguageButton;
