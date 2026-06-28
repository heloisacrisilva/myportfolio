import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 4.75rem);
  padding: 8rem 4rem 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  background:
    radial-gradient(circle at 10% 20%, rgba(98, 89, 129, 0.07) 0%, transparent 45%),
    radial-gradient(circle at 90% 10%, rgba(250, 245, 217, 0.4) 0%, transparent 50%), ${({ theme }) => theme.secondaryBackground};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 6rem 2rem 4rem 2rem;
    gap: 3rem;
    text-align: center;
    height: 100%;
  }
`;

export const ContentBox = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const Badge = styled.span`
  background-color: ${({ theme }) => theme.neutral6};
  color: ${({ theme }) => theme.neutral10};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 0.675rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.8rem;
  border-radius: 0.35rem;
  text-transform: uppercase;
  display: inline-block;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.primaryColor};
  line-height: 1.1;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  color: ${({ theme }) => theme.neutral5};
  margin: 0;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.fonts.helveticaMedium};
  max-width: 36rem;
  margin: 0.5rem 0 1rem 0;

  @media screen and (max-width: 1024px) {
    margin: 0.5rem auto 1rem auto;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1.25rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.neutral5};
  color:${({ theme }) => theme.neutral3};
  border: none;
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 0.95rem;
  padding: 0.85rem 1.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(98, 89, 129, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.isDark ? '#a79cd4' : '#52486E'};
    color: ${({ theme }) => theme.isDark ? '#1E1E1E' : '#FFFFFF'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  background-color:  ${({ theme }) => theme.neutral3};
  color: ${({ theme }) => theme.neutral5};
  border: 1.5px solid  ${({ theme }) => theme.neutral5};
  font-family: ${({ theme }) => theme.fonts.helveticaBold};
  font-size: 0.95rem;
  padding: 0.85rem 1.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color:  ${({ theme }) => theme.neutral5}08;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.dayBorder};
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  background: radial-gradient(circle at 30% 30%, #faf5d9 0%, #d8b4fe 70%, #635985 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 16rem;
    height: 16rem;
    border-width: 6px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
