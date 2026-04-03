'use client';

import * as S from './style';
import { getCookie } from '@/utils/cookies.client';
import { getTranslation } from '@/utils/i18n';
import LanguageButton from '../Buttons/LanguageButton';
import CONSTANTS from '@/config/constants.mjs';
import ThemeSwitcher from '../Buttons/ThemeSwitcher';

const { AVAILABLE_LOCALES } = CONSTANTS;

export const Header = () => {
  const lang = getCookie('locale');
  const t = getTranslation(lang, 'header');

  return (
    <S.Container>
      <S.Nav>
        <a>{t('owner')}</a>
      </S.Nav>
      <S.Sections>
        <S.SectionsItem $active={true} href="/about">
          {t('about')}
        </S.SectionsItem>
        <S.SectionsItem href="/stack">{t('stack')}</S.SectionsItem>
        <S.SectionsItem href="/projects">{t('projects')}</S.SectionsItem>
        <S.SectionsItem href="/contact">{t('contact')}</S.SectionsItem>
      </S.Sections>
      <ThemeSwitcher />
      <S.LocaleBox>
        {AVAILABLE_LOCALES.map((lang) => (
          <LanguageButton key={lang} lang={lang} />
        ))}
      </S.LocaleBox>
    </S.Container>
  );
};
