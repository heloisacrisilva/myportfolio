import styled from 'styled-components';

export const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.neutral15};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.commonColors.pink};
  }
`;