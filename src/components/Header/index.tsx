'use client';

import { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { getTranslation } from '@/utils/i18n';
import LanguageButton from '../Buttons/LanguageButton';
import CONSTANTS from '@/config/constants.mjs';
import ThemeSwitcher from '../Buttons/ThemeSwitcher';
import dynamic from 'next/dynamic';

const ToScrool = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });

const { AVAILABLE_LOCALES } = CONSTANTS;

interface HeaderProps {
  lang: string;
}

export const Header = ({ lang }: HeaderProps) => {
  const t = getTranslation(lang, 'header');

  const [activeSection, setActiveSection] = useState('AboutSection');

  const navItems = useMemo(
    () => [
      { id: 'AboutSection', label: t('about') },
      { id: 'StackSection', label: t('stack') },
      { id: 'ProjectsSection', label: t('projects') },
      { id: 'ContactSection', label: t('contact') },
    ],
    [t]
  );

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (!section) return;

        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(navItems[index].id);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <S.Container>
      <S.Nav>
        <a>{t('owner')}</a>
      </S.Nav>

      <S.Sections>
        {navItems.map((item) => (
          <S.SectionsItem key={item.id} $active={activeSection === item.id}>
            <ToScrool
              to={item.id}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveSection(item.id)}
              onClick={() => setActiveSection(item.id)}>
              {item.label}
            </ToScrool>
          </S.SectionsItem>
        ))}
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
