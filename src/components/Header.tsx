import { Container } from '../styles/components/Header'

import alexImg from '../assets/alex.jpg'

interface HeaderProps {
  description: string
}

export default function Header({ description }: HeaderProps): JSX.Element {
  return (
    <Container>
      <img src={alexImg} alt="A picture of Alexsandro Bezerra" />

      <h1>Alexsandro G Bezerra</h1>

      <h2>{description}</h2>
    </Container>
  )
}
