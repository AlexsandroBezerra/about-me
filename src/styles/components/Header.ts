import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  text-align: center;
  background: ${props => props.theme.header};
  padding: 4rem 0;

  img {
    margin-bottom: 2.4rem;
    border-radius: 50%;
    border-radius: 50%;
    width: 160px;
    height: 160px;
  }

  h1 {
    font-size: 6.4rem;
    margin-bottom: 1.6rem;
  }

  h2 {
    display: block;
    font-size: 2.4rem;
    padding-bottom: 4rem;
  }
`
