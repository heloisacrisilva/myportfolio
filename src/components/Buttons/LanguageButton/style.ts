import styled from 'styled-components';

export { Button };

const Button = styled.button<{ $selected: boolean }>`
  width: 4rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme, $selected }) => ($selected ? theme.commonColors.pink : 'transparent')};
  border: ${({ theme, $selected }) => ($selected ? 'none' : '0.063rem solid' + theme.commonColors.lightZinc)};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  cursor: pointer;

  color: ${({ theme, $selected }) => ($selected ? theme.commonColors.second : theme.commonColors.lightZinc)};
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-out;
    transform: scale(1.05);
  }
`;
