'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import StackCard from '@/components/Cards/StackCard';
import { SiGooglecloud, SiFigma, SiPostgresql, SiNodedotjs } from 'react-icons/si';
import { RiAiGenerate, RiJavaFill, RiNextjsLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';

interface StackSectionProps {
  lang: string;
}

export const StackSection = ({ lang }: StackSectionProps) => {
  const t = getTranslation(lang, 'stackSection');

  const stacks = [
    {
      title: t('titleNext'),
      icon: <RiNextjsLine />,
    },
    {
      title: t('titleTypeScript'),
      icon: <FaCode />,
    },
    {
      title: t('titleGolang'),
      icon: <FaCode />,
    },
    {
      title: t('titleNodejs'),
      icon: <SiNodedotjs />,
    },
    {
      title: t('titleGCP'),
      icon: <SiGooglecloud />,
    },
    {
      title: t('titlePostgreSQL'),
      icon: <SiPostgresql />,
    },
    {
      title: t('titleFigma'),
      icon: <SiFigma />,
    },
    {
      title: t('titleJava'),
      icon: <RiJavaFill />,
      learning: true,
      t: t('learning'),
    },
    {
      title: t('titleAIAgents'),
      icon: <RiAiGenerate />,
      learning: true,
      t: t('learning'),
    },
  ];

  return (
    <S.Section id="StackSection">
      <S.TextBox>
        <S.Title>{t('title')}</S.Title>
        <S.Subtitle>{t('subtitle')}</S.Subtitle>
      </S.TextBox>
      <S.CardsBox>
        {stacks.map((stack) => (
          <StackCard key={stack.title} title={stack.title} icon={stack.icon} learning={stack.learning} t={stack.t} />
        ))}
      </S.CardsBox>
    </S.Section>
  );
};
