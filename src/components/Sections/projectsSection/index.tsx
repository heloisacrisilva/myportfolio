'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface ProjectsSectionProps {
  lang: string;
}

export const ProjectsSection = ({ lang }: ProjectsSectionProps) => {
  const t = getTranslation(lang, 'projectsSection');
  const GitHubProfile = 'https://github.com/heloisacrisilva';

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
      </S.TextBox>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <S.GitHubLink href={GitHubProfile} target="_blank" title="GitHub">
          {t('gitHub')}
        </S.GitHubLink>
      </div>
    </S.Section>
  );
};
