'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import * as S from './style';

export const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const locale = useLocale()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <S.Container>
      <S.Nav>
        <a>{t('owner')}</a>
      </S.Nav>
      <S.LocaleBox>
        <S.LocaleLink $active={locale === 'pt'} href={switchLocale('pt')}>{t('PT')}</S.LocaleLink>
        <span>|</span>
        <S.LocaleLink $active={locale === 'en'} href={switchLocale('en')}>{t('EN')}</S.LocaleLink>
      </S.LocaleBox>
    </S.Container>
  );
};
