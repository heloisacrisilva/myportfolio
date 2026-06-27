import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4.75rem;
  padding: 1rem 4rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.primaryBackground}10;
  backdrop-filter: blur(8px);

  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.commonColors.lilac};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex: 1;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SectionsItem = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.commonColors.lilac : theme.secondaryColor)};
  font-family: ${({ theme, $active }) => ($active ? theme.fonts.helveticaBold : theme.fonts.helveticaMedium)};
  font-size: 0.9rem;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.commonColors.lilac};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.commonColors.lilac};
    &::after {
      transform: scaleX(1);
    }
  }
`;
export const LocaleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
