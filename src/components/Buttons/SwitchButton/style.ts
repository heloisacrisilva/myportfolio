import styled from 'styled-components';

export { Switch, Slider, Input };

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.5rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.commonColors.lightZinc};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1.125rem;

  &:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.25rem;
    background-color: ${({ theme }) => theme.commonColors.second};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.commonColors.pink};
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1rem);
  }
`;