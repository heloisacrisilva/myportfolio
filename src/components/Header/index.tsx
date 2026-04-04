'use client';

import * as S from './style';
import { getTranslation } from '@/utils/i18n';
import LanguageButton from '../Buttons/LanguageButton';
import CONSTANTS from '@/config/constants.mjs';
import ThemeSwitcher from '../Buttons/ThemeSwitcher';

const { AVAILABLE_LOCALES } = CONSTANTS;

import { Link as ToScrool } from 'react-scroll';

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
        <S.SectionsItem>
          <ToScrool to="AboutSection" activeClass="active" spy={true} smooth={true} duration={1000}>
            {t('about')}
          </ToScrool>
        </S.SectionsItem>
        <S.SectionsItem>
          <ToScrool to="StackSection" activeClass="active" spy={true} smooth={true} duration={1000}>
            {t('stack')}
          </ToScrool>
        </S.SectionsItem>{' '}
        <S.SectionsItem>
          <ToScrool to="ProjectsSection" activeClass="active" spy={true} smooth={true} duration={1000}>
            {t('projects')}
          </ToScrool>
        </S.SectionsItem>{' '}
        <S.SectionsItem>
          <ToScrool to="ContactSection" activeClass="active" spy={true} smooth={true} duration={1000}>
            {t('contact')}
          </ToScrool>
        </S.SectionsItem>
      </S.Sections>

      <ThemeSwitcher />

      <S.LocaleBox>
        {AVAILABLE_LOCALES.map((locale) => (
          <LanguageButton key={locale} lang={locale} currentLang={lang} />
        ))}
      </S.LocaleBox>
    </S.Container>
  );
};
