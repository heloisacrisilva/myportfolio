'use client';

import * as S from './style';
import { Header } from '@/components/Header';
import { getTranslation } from '@/utils/i18n';
import { getCookie } from '@/utils/cookies.client';

function Home() {
  const lang = getCookie('locale');
  const t = getTranslation(lang, 'home');

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

export default Home;
