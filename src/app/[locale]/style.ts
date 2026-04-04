import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: calc(100vh - 4.75rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-align: center;
  margin: 1.75rem;
  line-height: 150%;
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    font-size: 1.4rem;
  }
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`