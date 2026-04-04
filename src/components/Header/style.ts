import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid ${({ theme }) => theme.neutral8};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.secondaryBackground};
  gap: 1rem;
`;

export const Nav = styled.nav`
  color: ${({ theme }) => theme.commonColors.pink};
  font-weight: ${({ theme }) => theme.fonts.helveticaBold};
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 1;
`;

export const SectionsItem = styled.a<{ $active?: boolean }>`
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.commonColors.pink : theme.commonColors.lightZinc)};
  font-weight: ${({ theme, $active }) => ($active ? theme.fonts.helveticaBold : theme.fonts.helveticaMedium)};

  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-decoration-thickness: ${({ $active }) => ($active ? '2px' : '0')};
  text-underline-offset: ${({ $active }) => ($active ? '6px' : '0')};

  &:hover {
    color: ${({ theme }) => theme.commonColors.pink};
  }
`;

export const LocaleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
