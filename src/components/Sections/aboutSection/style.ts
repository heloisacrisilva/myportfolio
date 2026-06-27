import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  gap: 3rem;
  height: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 2rem;
    height: 100%;
  }
`;

export const TitleBox = styled.div`
  flex: 0.25;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    flex: none;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
  line-height: 1.2;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 1.5rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  margin: 0;
  white-space: pre-line;
  padding: 2rem 0rem;
  max-width: 30rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const StatCard = styled.div<{ $variant: 'lilac' | 'yellow' }>`
  flex: 1;
  padding: 1.25rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.25rem;
  min-height: 7.5rem;
  max-width: 20rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  background-color: ${({ theme, $variant }) => ($variant === 'lilac' ? theme.neutral7 : theme.neutral6)};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }
`;

export const StatNumber = styled.span<{ $variant: 'lilac' | 'yellow' }>`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};

  color: ${({ theme, $variant }) => ($variant === 'lilac' ? theme.commonColors.lilac : theme.neutral10)};
`;

export const StatLabel = styled.span<{ $variant: 'lilac' | 'yellow' }>`
  font-size: 0.725rem;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};

  color: ${({ $variant }) => ($variant === 'lilac' ? '#5B507A' : '#73520E')};
`;
