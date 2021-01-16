import styled, { keyframes } from 'styled-components'

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const Main = styled.main`
  animation: ${appearFromRight} 1s;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;

  max-width: 976px;
  margin: 5.6rem auto;
  padding: 0 2.4rem;
`
