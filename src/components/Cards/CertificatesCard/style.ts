import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  border: 1px solid ${({ theme }) => theme.dayBorder};
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;
  gap: 1.25rem;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px ${({ theme }) => (theme.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)')};
  }
`;

export const TitlesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.secondaryColor};
  transition: background-color 0.2s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
`;

export const CardSubtitle = styled.span`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.neutral5};
  margin: 0;
`;

export const LearningBadge = styled.span`
  position: absolute;
  top: 0.35rem;
  right: 0.75rem;
  background-color: ${({ theme }) => (theme.isDark ? '#2D2514' : '#FAF5D9')};
  color: ${({ theme }) => (theme.isDark ? '#F59E0B' : '#854D0E')};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 0.55rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
