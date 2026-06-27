import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  background-color: #FFFFFF; /* Clean white background */
  display: flex;
  flex-direction: column;
  gap: 6rem;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 4rem 2rem;
    gap: 2rem;
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
  line-height: 1.2;
`;

export const PlaceholderCard = styled.div`
  width: 100%;
  border: 2px dashed #ECEBEF;
  border-radius: 1rem;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  background-color: #FFFFFF;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.commonColors.lilac}60;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.commonColors.lilac};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #6B7280;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  max-width: 28rem;
  margin: 0;
`;
