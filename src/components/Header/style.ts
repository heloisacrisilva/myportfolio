import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f3dfe1;
  gap: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  flex: 1;

  color: black;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export const LocaleButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    color: white;
    opacity: 0.6;
  }
`;

export const LocaleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    color: white;
  }
`

export const LocaleLink = styled.a<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#d6346a' : '#ffff')};
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $active }) =>
    $active &&
    `
    transform: scale(1.1);
    font-weight: bold;
  `}

  &:hover {
    transform: scale(1.15);
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`
