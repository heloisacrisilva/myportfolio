'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface AboutSectionProps {
  lang: string;
}

const STAT_CARDS = [
  { variant: 'lilac', countKey: 'experienceCount', textKey: 'experienceText' },
  { variant: 'yellow', countKey: 'commitmentCount', textKey: 'commitmentText' },
  { variant: 'lilac', countKey: 'experienceCountDev', textKey: 'experienceTextDev' },
  { variant: 'yellow', countKey: 'growthCount', textKey: 'growthText' },
] as const;

const COLUMNS_COUNT = 1;

export const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = getTranslation(lang, 'aboutSection');

  return (
    <S.Section id="AboutSection">
      <S.TitleBox>
        <S.Title>{t('title')}</S.Title>
      </S.TitleBox>

      <S.ContentBox>
        <S.Description>{t('description')}</S.Description>
        <S.CardsContainer>
          {Array.from({ length: COLUMNS_COUNT }, (_, i) => (
            <S.Column key={i}>
              {STAT_CARDS.map(({ variant, countKey, textKey }) => (
                <S.StatCard key={variant} $variant={variant}>
                  <S.StatNumber $variant={variant}>{t(countKey)}</S.StatNumber>
                  <S.StatLabel $variant={variant}>{t(textKey)}</S.StatLabel>
                </S.StatCard>
              ))}
            </S.Column>
          ))}
        </S.CardsContainer>
      </S.ContentBox>
    </S.Section>
  );
};