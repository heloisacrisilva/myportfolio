import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizer.xl};
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  white-space: pre-line;
`;
