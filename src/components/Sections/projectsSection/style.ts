import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  min-height: calc(100vh - 4rem);
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  font-weight: ${({ theme }) => theme.fonts.helveticaExtraBold};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizer.xl};
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  white-space: pre-line;
`;

export const GitHubLink = styled.a`
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  color: ${({ theme }) => theme.commonColors.primary};
  text-decoration: none;
  background-color: ${({ theme }) => theme.commonColors.lightPink};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.neutral10};
  }
`;
