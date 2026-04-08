import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding: 4rem 4rem;
  display: flex;
  gap: 6rem;
`;

export const TextBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizer.xxl};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;

  background-image: linear-gradient(to right, ${({ theme }) => theme.commonColors.pink} 50%, transparent 50%);
  background-repeat: no-repeat;
  background-size: 100% 0.3rem; 
  background-position: 0 112%;

  display: inline-block; 
  width: fit-content;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizer.xl};
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  white-space: pre-line;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
`;

export const ImageBox = styled.div`
  flex: 0.7;
  display: flex;
  border-radius: 1rem;
  align-items: center;
`;

export const SubtitleBox = styled.div`
  background-color: ${({ theme }) => theme.commonColors.lightPink};
  width: fit-content;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizer.sm};
  color: ${({ theme }) => theme.commonColors.pink};
`;
