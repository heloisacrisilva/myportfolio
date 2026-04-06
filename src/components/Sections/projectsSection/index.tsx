'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { useTheme } from '@/contexts/themeProviders';

interface ProjectsSectionProps {
  lang: string;
}

export const ProjectsSection = ({ lang }: ProjectsSectionProps) => {
  const t = getTranslation(lang, 'projectsSection');

  //   const projects = [
  //     {
  //       title: t('titleNext'),
  //       description: t('desc_next'),
  //       link: 'https://example.com' },
  //       image: 'https://via.placeholder.com/150'
  //   ];

  return (
    <S.Section id="ProjectsSection">
      <S.TextBox>
        <S.Title>{t('title')}</S.Title>
        <S.Subtitle>{t('subtitle')}</S.Subtitle>
        <S.GitHubLink href="https://github.com/heloisacrisilva" target="_blank" title="GitHub">
          {t('gitHub')}: {t('githubLink')}
        </S.GitHubLink>
      </S.TextBox>
    </S.Section>
  );
};
