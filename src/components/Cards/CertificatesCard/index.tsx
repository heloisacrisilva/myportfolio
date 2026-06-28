'use client';

import * as S from './style';

interface CertificatesCardProps {
  title: string;
  institute?: string;
  icon?: React.ReactNode;
  progress?: boolean;
  t?: string;
}

const CertificatesCard = ({ title, icon, progress, institute, t }: CertificatesCardProps) => {
  return (
    <S.CardContainer>
      {progress && <S.LearningBadge>{t || 'Progress'}</S.LearningBadge>}

      <S.IconWrapper>{icon}</S.IconWrapper>

      <S.TitlesBox>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSubtitle>{institute}</S.CardSubtitle>
      </S.TitlesBox>
    </S.CardContainer>
  );
};

export default CertificatesCard;
