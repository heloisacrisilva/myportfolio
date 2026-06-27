import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  border: 1px solid ${({ theme }) => theme.dayBorder};
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px ${({ theme }) => theme.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)'};
  }
`;

export const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark ? '#2D2D30' : '#F1F0F5'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondaryColor};
  transition: background-color 0.2s ease;

  ${CardContainer}:hover & {
    background-color: ${({ theme }) => theme.isDark ? '#3D3D42' : '#E2E1E9'};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
  text-align: center;
`;

export const LearningBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: ${({ theme }) => theme.isDark ? '#2D2514' : '#FAF5D9'}; 
  color: ${({ theme }) => theme.isDark ? '#F59E0B' : '#854D0E'}; 
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 0.55rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;