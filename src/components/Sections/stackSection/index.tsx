'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import StackCard from '@/components/Cards/StackCard';
import { SiGooglecloud, SiNodedotjs, SiFigma, SiPostgresql, SiGit } from 'react-icons/si';
import { RiJavaFill, RiJavascriptFill, RiNextjsLine } from 'react-icons/ri';
import { useTheme } from '@/contexts/themeProviders';

interface StackSectionProps {
  lang: string;
}

export const StackSection = ({ lang }: StackSectionProps) => {
  const t = getTranslation(lang, 'stackSection');
  const theme = useTheme();

  const stacks = [
    {
      title: t('titleNext'),
      description: t('desc_next'),
      icon: <RiNextjsLine size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titleTypeScript'),
      description: t('desc_ts'),
      icon: <RiJavascriptFill size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titleNodejs'),
      description: t('desc_nodejs'),
      icon: <SiNodedotjs size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titleJava'),
      description: t('desc_java'),
      icon: <RiJavaFill size={24} color={theme.theme.commonColors.pink} />,
      learning: true,
      t: t('learning') 
    },
    {
      title: t('titleFigma'),
      description: t('desc_figma'),
      icon: <SiFigma size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titleGCP'),
      description: t('desc_gcp'),
      icon: <SiGooglecloud size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titlePostgreSQL'),
      description: t('desc_postgresql'),
      icon: <SiPostgresql size={24} color={theme.theme.commonColors.pink} />,
    },
    {
      title: t('titleGIT'),
      description: t('desc_git'),
      icon: <SiGit size={24} color={theme.theme.commonColors.pink} />,
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
          <StackCard key={stack.title} title={stack.title} description={stack.description} icon={stack.icon} learning={stack.learning} t={stack.t} />
        ))}
      </S.CardsBox>
    </S.Section>
  );
};
