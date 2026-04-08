import styled from 'styled-components';

export const FormsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Ttile = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryBackground};
  gap: 1rem;
  width: 100%;
  max-width: 50%;
  padding: 3rem;
  border-radius: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  resize: vertical;
  border: none;
`;

export const Button = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  border: none;
  background: ${({ theme }) => theme.commonColors.pink};
  color: ${({ theme }) => theme.commonColors.second};;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 1rem;
  &:hover {
    background: ${({ theme }) => theme.commonColors.lightPink};
    color: ${({ theme }) => theme.commonColors.pink};
  }
`;

