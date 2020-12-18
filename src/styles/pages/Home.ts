import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;

    border: 0.1rem solid #333;
    margin: 4.8rem auto;
  }

  h1 {
    font-size: 5.6rem;
    margin: 0 4rem;
  }

  p {
    margin: 2.4rem 4rem;
    font-size: 2.4rem;
    color: #666;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 3.2rem;
  padding: 3.2rem;
  width: 100%;
  max-width: 90rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    border: 0.1rem solid #333;
    font-size: 2.8rem;
    color: #333;
    text-decoration: none;
    margin: 3.2rem;

    height: 9.6rem;
    padding: 3.2rem;
    border-radius: 1.6rem;

    h3 {
      margin-left: 0.8rem;
    }

    &:hover {
      color: #107fd2;
      border: 0.1rem solid #107fd2;
    }
  }

  @media (min-width: 900px) {
    a {
      min-width: 32rem;
    }
  }
`
