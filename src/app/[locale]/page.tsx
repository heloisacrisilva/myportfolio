'use client';

import { useTranslations } from 'next-intl';
import * as S from './style';
import { Header } from '@/components/Header';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <S.Container>
      <Header />
      <S.LogoContent>
        <S.InfoContent>
          <S.Title>{t('title')}</S.Title>
        </S.InfoContent>
      </S.LogoContent>
    </S.Container>
  );
}
