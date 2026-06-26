'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface FooterProps {
  lang: string;
}

export const Footer = ({ lang }: FooterProps) => {
  const t = getTranslation(lang, 'footer');

  const LinkedinURI = 'https://www.linkedin.com/in/heloisacrissilva/';
  const GitHubURI = 'https://github.com/heloisacrisilva';

  return (
    <S.FooterContainer>
      <S.Logo href="#HeroSection">Portfolio</S.Logo>
      
      <S.Copyright>{t('copyright')}</S.Copyright>
      
      <S.LinksList>
        <S.LinkItem href={LinkedinURI} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </S.LinkItem>
        <S.LinkItem href={GitHubURI} target="_blank" rel="noopener noreferrer">
          GitHub
        </S.LinkItem>
      </S.LinksList>
    </S.FooterContainer>
  );
};
