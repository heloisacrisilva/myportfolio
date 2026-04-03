'use client';

import * as S from './style';
import { getTranslation } from '@/utils/i18n';
import LanguageButton from '../Buttons/LanguageButton';
import CONSTANTS from '@/config/constants.mjs';
import ThemeSwitcher from '../Buttons/ThemeSwitcher';

const { AVAILABLE_LOCALES } = CONSTANTS;

interface HeaderProps {
  lang: string;
}

export const Header = ({ lang }: HeaderProps) => {
  const t = getTranslation(lang, 'header');

  return (
    <S.Container>
      <S.Nav>
        <a>{t('owner')}</a>
      </S.Nav>

      <S.Sections>
        <S.SectionsItem $active href={`/${lang}/`}>
          {t('about')}
        </S.SectionsItem>

        <S.SectionsItem href={`/${lang}/stack`}>
          {t('stack')}
        </S.SectionsItem>

        <S.SectionsItem href={`/${lang}/projects`}>
          {t('projects')}
        </S.SectionsItem>

        <S.SectionsItem href={`/${lang}/contact`}>
          {t('contact')}
        </S.SectionsItem>
      </S.Sections>

      <ThemeSwitcher />

      <S.LocaleBox>
        {AVAILABLE_LOCALES.map((locale) => (
          <LanguageButton  key={locale} lang={locale} currentLang={lang} />
        ))}
      </S.LocaleBox>
    </S.Container>
  );
};