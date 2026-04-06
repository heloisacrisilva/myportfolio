import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 1rem;
  background: ${({ theme }) => theme.secondaryBackground};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.neutral8};
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const LinkIcon = styled.a`
  color: ${({ theme }) => theme.commonColors.pink};
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.commonColors.lightPink};
  }
`;

export const BackToTop = styled.button`
  background: ${({ theme }) => theme.commonColors.pink};
  color: ${({ theme }) => theme.secondaryBackground};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
