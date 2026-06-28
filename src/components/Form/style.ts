import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  border-radius: 1.5rem;
  padding: 4rem;
  display: flex;
  gap: 4rem;
  width: 100%;
  max-width: 68rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.02), 0 4px 6px -2px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({ theme }) => theme.dayBorder};

  @media screen and (max-width: 968px) {
    flex-direction: column;
    padding: 2.5rem;
    gap: 3rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem;
    gap: 2rem;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
  line-height: 1.2;
  
  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.secondaryColor};
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  margin: 0;
`;

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const IconWrapper = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark ? '#2D2D30' : '#F1F0F5'}; /* Very soft grayish purple */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.commonColors.lilac};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DetailLabel = styled.span`
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-weight: bold;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const DetailValue = styled.a`
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.commonColors.lilac};
    text-decoration: underline;
  }
`;

export const DetailValueAsText = styled.span`
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  color: ${({ theme }) => theme.primaryColor};
`;

export const FormColumn = styled.form`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-weight: bold;
  color: ${({ theme }) => theme.isDark ? '#E5E7EB' : '#374151'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.5rem;
  border: 1.5px solid ${({ theme }) => theme.dayBorder};
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.isDark ? '#121212' : '#FFFFFF'};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #9CA3AF;
    font-size: 0.9rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.commonColors.lilac};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.commonColors.lilac}20;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.5rem;
  border: 1.5px solid ${({ theme }) => theme.dayBorder};
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.isDark ? '#121212' : '#FFFFFF'};
  resize: vertical;
  min-height: 8rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #9CA3AF;
    font-size: 0.9rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.commonColors.lilac};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.commonColors.lilac}20;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  border: none;
  background: ${({ theme }) => theme.neutral5};
  color: ${({ theme }) => theme.isDark ? '#1E1E1E' : '#FFFFFF'};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(98, 89, 129, 0.15);

  &:hover {
    background-color: ${({ theme }) => theme.isDark ? '#a79cd4' : '#52486E'};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #9CA3AF;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const StatusMessage = styled.span<{ $type: 'success' | 'error' }>`
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  color: ${({ $type }) => ($type === 'success' ? '#10B981' : '#EF4444')};
  margin-top: 0.5rem;
  text-align: left;
`;
