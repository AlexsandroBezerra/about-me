import Head from 'next/head'
import { FiLink, FiCpu } from 'react-icons/fi'

import Button from '../components/Button'
import Header from '../components/Header'

import { Main } from '../styles/pages/Home'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra</title>
        <meta name="title" content="Alexsandro G Bezerra" />
        <meta name="description" content="Using my knowledge to help people." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexbezerra.xyz/" />
        <meta property="og:title" content="Alexsandro G Bezerra" />
        <meta
          property="og:description"
          content="Using my knowledge to help people."
        />
        <meta property="og:image" content="/seo-home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexbezerra.xyz/" />
        <meta property="twitter:title" content="Alexsandro G Bezerra" />
        <meta
          property="twitter:description"
          content="Using my knowledge to help people."
        />
        <meta property="twitter:image" content="/seo-home.png" />
      </Head>

      <Header description="Using my knowledge to help people." />

      <Main>
        <Button
          href="/links"
          icon={FiLink}
          title="Links"
          description="Social network links, LinkedIn, Github..."
        />

        <Button
          href="/projects"
          icon={FiCpu}
          title="Personal Projects"
          description="Some personal projects I created to study."
        />
      </Main>
    </>
  )
}
