import styled from 'styled-components'

export const Container = styled.a`
  display: block;
  background: ${props => props.theme.box};
  border: 2px solid ${props => props.theme.box};

  padding: 4rem;
  flex: 1;
  border-radius: 1rem;
  min-width: 35rem;

  color: ${props => props.theme.secondaryText};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  div {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    color: ${props => props.theme.text};
    font-family: 'Roboto Condensed', sans-serif;

    svg {
      margin-right: 0.8rem;
    }
  }

  transition: 0.2s;

  &:hover {
    transform: translateY(-8px);
    border: 2px solid #5ac4f1;
  }
`
