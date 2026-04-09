import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.neutral8};
`;
