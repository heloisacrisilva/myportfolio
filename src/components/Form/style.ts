import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryBackground};
  gap: 1rem;
  width: 100%;
  max-width: 50%;
  padding: 3rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 968px) {
    gap: 0.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: 968px) {
    gap: 0.5rem;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;

  @media screen and (max-width: 968px) {
    font-size: ${({ theme }) => theme.fonts.sizer.xl};
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  width: 100%;

  @media screen and (max-width: 968px) {
    padding: 0.5rem;
  }

  &::placeholder {
    @media screen and (max-width: 968px) {
      font-size: ${({ theme }) => theme.fonts.sizer.sm};
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  resize: vertical;
  border: none;

  @media screen and (max-width: 968px) {
    padding: 0.5rem;
  }

  &::placeholder {
    @media screen and (max-width: 968px) {
      font-size: ${({ theme }) => theme.fonts.sizer.sm};
    }
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.sizer.xl};

  @media screen and (max-width: 968px) {
    font-size: ${({ theme }) => theme.fonts.sizer.sm};
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.sizer.md};
  border: none;
  background: ${({ theme }) => theme.commonColors.pink};
  color: ${({ theme }) => theme.commonColors.second};
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 1rem;
  &:hover {
    background: ${({ theme }) => theme.commonColors.lightPink};
    color: ${({ theme }) => theme.commonColors.pink};
  }
`;
