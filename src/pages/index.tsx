import Image from 'next/image'
import Head from 'next/head'
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineRocket
} from 'react-icons/ai'

import {
  Container,
  ImageContainer,
  ButtonsContainer
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Alexsandro G Bezerra | Links</title>

        <meta
          name="description"
          content="Usando meus conhecimentos para ajudar pessoas"
        />

        <meta property="og:site_name" content="Alexsandro G Bezerra | Site" />

        <meta property="og:title" content="Alexsandro G Bezerra | Site" />
        <meta
          property="og:description"
          content="Usando meus conhecimentos para ajudar pessoas"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Alexsandro G Bezerra | Site" />
        <meta
          name="twitter:description"
          content="Usando meus conhecimentos para ajudar pessoas"
        />
      </Head>

      <Container>
        <ImageContainer>
          <Image
            src="/alex.jpg"
            alt="Alexsandro G Bezerra"
            width={180}
            height={180}
          />
        </ImageContainer>
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
    </>
  )
}

export default Home
