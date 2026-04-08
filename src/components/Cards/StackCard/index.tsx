'use client';

import * as S from './style';

interface StackCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  learning?: boolean;
  t?: string
}

const StackCard = ({ title, description, icon, learning, t }: StackCardProps) => {
  return (
    <S.CardContainer>
      <S.HeaderCard>
        {icon && <div style={{ marginBottom: '1rem' }}>{icon}</div>}
        {learning && <S.LearningBadge>{t || 'Learning'}</S.LearningBadge>}
      </S.HeaderCard>

      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardContainer>
  );
};

export default StackCard;
