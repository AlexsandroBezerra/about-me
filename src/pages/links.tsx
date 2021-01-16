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
        <meta name="title" content="Alexsandro G Bezerra | Links" />
        <meta
          name="description"
          content="Social networks links, LinkedIn, Github..."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexbezerra.xyz/" />
        <meta property="og:title" content="Alexsandro G Bezerra | Links" />
        <meta
          property="og:description"
          content="Social networks links, LinkedIn, Github..."
        />
        <meta property="og:image" content="/seo-links.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexbezerra.xyz/" />
        <meta property="twitter:title" content="Alexsandro G Bezerra | Links" />
        <meta
          property="twitter:description"
          content="Social networks links, LinkedIn, Github..."
        />
        <meta property="twitter:image" content="/seo-links.png" />
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
