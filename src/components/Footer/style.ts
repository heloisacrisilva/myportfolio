import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 4rem;
  background-color: ${({ theme }) => theme.primaryBackground};
  border-top: 1px solid ${({ theme }) => theme.dayBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* position: fixed;÷ */
  bottom: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1.5rem;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.neutral5};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Copyright = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.isDark ? '#9CA3AF' : '#6b7280'};
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};

  @media screen and (max-width: 768px) {
    order: 3;
  }
`;

export const LinksList = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const LinkItem = styled.a`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.commonColors.lightZinc};
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.neutral5};
  }
`;
