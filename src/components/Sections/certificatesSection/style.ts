import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 4rem 2rem;
    height: 100%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  max-width: 40rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  margin: 0;
  line-height: 1.5;
`;

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
