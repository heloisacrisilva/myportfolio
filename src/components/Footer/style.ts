import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.5rem 4rem;
  background-color: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1.25rem;
    text-align: center;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.commonColors.lilac};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Copyright = styled.span`
  font-size: 0.8rem;
  color: #6B7280;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};

  @media screen and (max-width: 768px) {
    order: 3; /* Push copyright to the bottom on mobile */
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
  color: #4B5563;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.commonColors.lilac};
  }
`;
