import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.neutral8};

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;
