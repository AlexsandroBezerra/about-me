import Head from 'next/head'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { IoRocketOutline } from 'react-icons/io5'

import Button from '../components/Button'
import Header from '../components/Header'

import { Main } from '../styles/pages/Home'

export default function Links(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra | Links</title>
      </Head>

      <Header description="Links" />

      <Main>
        <Button
          href="https://www.linkedin.com/in/alexsandrobezerra"
          icon={FiLinkedin}
          title="LinkedIn"
          description="Personal Linkedìn profile."
        />

        <Button
          href="https://github.com/AlexsandroBezerra"
          icon={FiGithub}
          title="Github"
          description="Here you can see my projects and my code."
        />

        <Button
          href="https://app.rocketseat.com.br/me/alexsandro-bezerra"
          icon={IoRocketOutline}
          title="Rocketseat"
          description="My Rocketseat profile."
        />
      </Main>
    </>
  )
}
