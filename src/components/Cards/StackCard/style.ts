import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  text-decoration: none;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  background-color: ${({ theme }) => theme.neutral7};

  &:hover {
    transform: translateY(-3px) scale(1.02) ; 
  }
`;

export const CardTitle = styled.p`
  font-size:  ${({ theme }) => theme.fonts.sizer.xl};
  color: ${({ theme }) => theme.primaryColor};
`;

export const CardDescription = styled.span`
  font-size:  ${({ theme }) => theme.fonts.sizer.md};
  color: ${({ theme }) => theme.primaryColor};
`;

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;