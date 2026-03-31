'use client';

import * as S from './style';
import { Header } from '@/components/Header';

function Home() {

  return (
    <S.Container>
      <Header />
      <S.LogoContent>
        <S.InfoContent>
          <S.Title></S.Title>
        </S.InfoContent>
      </S.LogoContent>
    </S.Container>
  );
}

export default Home;
