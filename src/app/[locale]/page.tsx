'use client';

import { AboutSection } from '@/components/Sections/aboutSection';
import * as S from './style';
import { Header } from '@/components/Header';
import { StackSection } from '@/components/Sections/stackSection';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale: lang } = params;

  return (
    <S.Container>
      <Header lang={lang} />
      <AboutSection lang={lang} />
      <StackSection lang={lang} />
    </S.Container>
  );
}
