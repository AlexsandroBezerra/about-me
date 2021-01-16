import Head from 'next/head'
import { FiLink, FiCpu } from 'react-icons/fi'

import Button from '../components/Button'
import Header from '../components/Header'
import SEOImg from '../assets/seo-home.png'

import { Main } from '../styles/pages/Home'

const baseUrl = 'https://alexbezerra.xyz'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra</title>
        <meta name="title" content="Alexsandro G Bezerra" />
        <meta name="description" content="Using my knowledge to help people." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alexsandro G Bezerra" />
        <meta property="og:site_name" content="Alexsandro G Bezerra" />
        <meta property="og:url" content="https://alexbezerra.xyz" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={`${baseUrl}/${SEOImg}`} />
        <meta
          property="og:description"
          content="Using my knowledge to help people."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexbezerra.xyz" />
        <meta property="twitter:title" content="Alexsandro G Bezerra" />
        <meta property="twitter:image" content={`${baseUrl}/${SEOImg}`} />
        <meta
          property="twitter:description"
          content="Using my knowledge to help people."
        />
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
