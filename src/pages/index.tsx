import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineRocket
} from 'react-icons/ai'
import { Container, ButtonsContainer } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <img src="alex.jpg" alt="Alexsandro G Bezerra" />

      <h1>Alexsandro G Bezerra</h1>

      <p>Usando meus conhecimentos para ajudar pessoas</p>

      <ButtonsContainer>
        <a href="https://www.linkedin.com/in/alexsandrobezerra/">
          <AiOutlineLinkedin />
          <h3>LikedIn</h3>
        </a>
        <a href="https://github.com/AlexsandroBezerra">
          <AiOutlineGithub />
          <h3>Github</h3>
        </a>
        <a href="https://app.rocketseat.com.br/me/alexsandro-bezerra">
          <AiOutlineRocket />
          <h3>Rocketseat</h3>
        </a>
      </ButtonsContainer>
    </Container>
  )
}

export default Home
