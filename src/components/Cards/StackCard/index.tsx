'use client'

import * as S from './style';

interface StackCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const StackCard = ({ title, description, icon }: StackCardProps) => {
  return (
    <S.CardContainer>
      {icon && <div style={{ marginBottom: '1rem' }}>{icon}</div>}

      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardContainer>
  );
};

export default StackCard;
