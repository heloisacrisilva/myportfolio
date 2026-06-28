'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/Sections/heroSection';
import { AboutSection } from '@/components/Sections/aboutSection';
import { StackSection } from '@/components/Sections/stackSection';
import { ProjectsSection } from '@/components/Sections/projectsSection';
import { ContactSection } from '@/components/Sections/contactSection';
import { Footer } from '@/components/Footer';
import * as S from './style';
import { CetificatesSection } from '@/components/Sections/certificatesSection';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale: lang } = params;

  return (
    <>
      <Header lang={lang} />
      <S.Container>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <StackSection lang={lang} />
        <ProjectsSection lang={lang} />
        <CetificatesSection lang={lang}/>
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </S.Container>
    </>
  );
}
