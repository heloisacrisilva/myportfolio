'use client';

import { AboutSection } from '@/components/Sections/aboutSection';
import * as S from './style';
import { Header } from '@/components/Header';
import { StackSection } from '@/components/Sections/stackSection';
import { ProjectsSection } from '@/components/Sections/projectsSection';
import { ContactSection } from '@/components/Sections/contactSection';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale: lang } = params;

  return (
    <>
      <Header lang={lang} />
      <S.Container>
        <AboutSection lang={lang} />
        <StackSection lang={lang} />
        <ProjectsSection lang={lang}/>
        <ContactSection lang={lang} />
      </S.Container>
    </>
  );
}
