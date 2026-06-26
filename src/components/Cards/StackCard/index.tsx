'use client';

import * as S from './style';

interface StackCardProps {
  title: string;
  icon?: React.ReactNode;
  learning?: boolean;
  t?: string;
}

const StackCard = ({ title, icon, learning, t }: StackCardProps) => {
  return (
    <S.CardContainer>
      {learning && <S.LearningBadge>{t || 'Learning'}</S.LearningBadge>}
      
      <S.IconWrapper>
        {icon}
      </S.IconWrapper>

      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  );
};

export default StackCard;
