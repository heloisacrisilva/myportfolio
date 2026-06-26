'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import dynamic from 'next/dynamic';

const ToScroll = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });

interface HeroSectionProps {
  lang: string;
}

export const HeroSection = ({ lang }: HeroSectionProps) => {
  const t = getTranslation(lang, 'heroSection');

  return (
    <S.Section id="HeroSection">
      <S.ContentBox>
        <S.Badge>{t('badge')}</S.Badge>
        <S.Title>{t('title')}</S.Title>
        <S.Subtitle>{t('subtitle')}</S.Subtitle>
        <S.Description>{t('description')}</S.Description>
        
        <S.ButtonBox>
          <ToScroll to="ProjectsSection" smooth={true} duration={1000} style={{ textDecoration: 'none' }}>
            <S.PrimaryButton>
              {t('projectsBtn')} <span style={{ marginLeft: '0.5rem' }}>→</span>
            </S.PrimaryButton>
          </ToScroll>
          
          <ToScroll to="ContactSection" smooth={true} duration={1000} style={{ textDecoration: 'none' }}>
            <S.SecondaryButton>
              {t('talkBtn')}
            </S.SecondaryButton>
          </ToScroll>
        </S.ButtonBox>
      </S.ContentBox>

      <S.ImageBox>
        <S.ImageContainer>
          <S.ProfileImage src="/images/me.png" alt="Heloísa Cristovão da Silva" />
        </S.ImageContainer>
      </S.ImageBox>
    </S.Section>
  );
};
