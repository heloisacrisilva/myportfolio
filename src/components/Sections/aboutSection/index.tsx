'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface AboutSectionProps {
  lang: string;
}

export const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = getTranslation(lang, 'aboutSection');
  
  const columns = [1];

  return (
    <S.Section id="AboutSection">
      <S.TitleBox>
        <S.Title>{t('title')}</S.Title>
      </S.TitleBox>
      
      <S.ContentBox>
          {columns.map((col) => (
            <S.Column key={col}>
              <S.Description>{t('description')}</S.Description>
              
              <S.CardsContainer>
                <S.StatCard $variant="lilac">
                  <S.StatNumber $variant="lilac">{t('experienceCount')}</S.StatNumber>
                  <S.StatLabel $variant="lilac">{t('experienceText')}</S.StatLabel>
                </S.StatCard>
                
                <S.StatCard $variant="yellow">
                  <S.StatNumber $variant="yellow">{t('commitmentCount')}</S.StatNumber>
                  <S.StatLabel $variant="yellow">{t('commitmentText')}</S.StatLabel>
                </S.StatCard>
              </S.CardsContainer>
            </S.Column>
          ))}
      </S.ContentBox>
    </S.Section>
  );
};
