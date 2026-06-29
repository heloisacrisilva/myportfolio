'use client';

import * as S from './style';

interface CertificatesCardProps {
  title: string;
  institute?: string;
  icon?: React.ReactNode;
  progress?: boolean;
  link?: string;
  t?: string;
}

const CertificatesCard = ({ title, icon, progress, link, institute, t }: CertificatesCardProps) => {
  return (
    <S.CardContainer>
      <a target='_blank' href={link}>
        {progress && <S.LearningBadge>{t || 'Progress'}</S.LearningBadge>}

        <S.IconWrapper>{icon}</S.IconWrapper>

        <S.TitlesBox>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardSubtitle>{institute}</S.CardSubtitle>
        </S.TitlesBox>
      </a>
    </S.CardContainer>
  );
};

export default CertificatesCard;
