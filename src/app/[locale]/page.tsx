'use client';

import { AboutSection } from '@/components/Sections/aboutSection';
import * as S from './style';
import { Header } from '@/components/Header';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale: lang } = params;

  return (
    <S.Container>
      <Header lang={lang} />
      <AboutSection lang={lang} />
    </S.Container>
  );
}
