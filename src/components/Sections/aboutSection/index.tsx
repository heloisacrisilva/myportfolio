'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface AboutSectionProps {
  lang: string;
}

export const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = getTranslation(lang, 'aboutSection');
  return (
    <S.Section>
      <S.Title>{t('title')}</S.Title>
      <S.Description>{t('description')}</S.Description>
    </S.Section>
  );
};
