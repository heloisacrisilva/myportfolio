import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  display: flex;
  gap: 2rem;
`;

export const TextBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
`;

export const ImageBox = styled.div`
  flex: 0.7;
  display: flex;
  border-radius: 1rem;
  align-items: center;
`;
