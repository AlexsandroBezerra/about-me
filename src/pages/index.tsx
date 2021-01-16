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
      </Head>

      <Header description="Using my knowledge to help people." />

      <Main>
        <Button
          href="/"
          icon={FiLink}
          title="Links"
          description="Social network links, LinkedIn, Github..."
        />
        <Button
          href="/"
          icon={FiCpu}
          title="Personal Projects"
          description="Some personal projects I created to study."
        />
      </Main>
    </>
  )
}
