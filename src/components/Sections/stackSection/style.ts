import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  background-color: ${({ theme }) => theme.neutral8};
  min-height: calc(100vh - 4rem);
  @media screen and (max-width: 1280px) {
    padding: 2rem;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
  gap: 2rem;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  font-weight: ${({ theme }) => theme.fonts.helveticaExtraBold};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  white-space: pre-line;
`;

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
