import Head from 'next/head'
import { FiScissors, FiCalendar, FiCompass } from 'react-icons/fi'

import Button from '../components/Button'
import Header from '../components/Header'
import SEOImg from '../assets/seo-projects.png'

import { Main } from '../styles/pages/Home'

const baseUrl = 'https://alexbezerra.xyz'

export default function Projects(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra | Personal Projects</title>
        <meta name="title" content="Alexsandro G Bezerra | Personal Projects" />
        <meta
          name="description"
          content="Some personal projects I created to study."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Alexsandro G Bezerra | Personal Projects"
        />
        <meta
          property="og:site_name"
          content="Alexsandro G Bezerra | Personal Projects"
        />
        <meta property="og:url" content="https://alexbezerra.xyz/projects" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={`${baseUrl}/${SEOImg}`} />
        <meta
          property="og:description"
          content="Some personal projects I created to study."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://alexbezerra.xyz/projects"
        />
        <meta
          property="twitter:title"
          content="Alexsandro G Bezerra | Personal Projects"
        />
        <meta property="twitter:image" content={`${baseUrl}/${SEOImg}`} />
        <meta
          property="twitter:description"
          content="Some personal projects I created to study."
        />
      </Head>

      <Header description="Personal Projects" />

      <Main>
        <Button
          href="https://github.com/AlexsandroBezerra/gobarber"
          icon={FiScissors}
          title="GoBarber"
          description="The best way to schedule your service!"
        />

        <Button
          href="https://github.com/AlexsandroBezerra/devcalendar"
          icon={FiCalendar}
          title="DevCalendar"
          description="Everything needed to organize events' dates."
        />

        <Button
          href="https://traveler.alexbezerra.xyz"
          icon={FiCompass}
          title="Traveler"
          description="A site for those who want to visit cities in Ceará."
        />
      </Main>
    </>
  )
}
