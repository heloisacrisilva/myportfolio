'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { FaTools } from 'react-icons/fa';

interface ProjectsSectionProps {
  lang: string;
}

export const ProjectsSection = ({ lang }: ProjectsSectionProps) => {
  const t = getTranslation(lang, 'projectsSection');

  return (
    <S.Section id="ProjectsSection">
      <S.Title>{t('title')}</S.Title>
      
      <S.PlaceholderCard>
        <S.IconWrapper>
          <FaTools />
        </S.IconWrapper>
        <S.CardTitle>{t('cardTitle')}</S.CardTitle>
        <S.CardDescription>{t('cardDescription')}</S.CardDescription>
      </S.PlaceholderCard>
    </S.Section>
  );
};
