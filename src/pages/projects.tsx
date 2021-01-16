import Head from 'next/head'
import { FiScissors, FiCalendar, FiCompass } from 'react-icons/fi'

import Button from '../components/Button'
import Header from '../components/Header'

import { Main } from '../styles/pages/Home'

export default function Projects(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra | Personal Projects</title>
        <meta name="title" content="Alexsandro G Bezerra | Personal Projects" />
        <meta
          name="description"
          content="Some personal projects that I created to study."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexbezerra.xyz/" />
        <meta
          property="og:title"
          content="Alexsandro G Bezerra | Personal Projects"
        />
        <meta
          property="og:description"
          content="Some personal projects that I created to study."
        />
        <meta property="og:image" content="/seo-projects.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexbezerra.xyz/" />
        <meta
          property="twitter:title"
          content="Alexsandro G Bezerra | Personal Projects"
        />
        <meta
          property="twitter:description"
          content="Some personal projects that I created to study."
        />
        <meta property="twitter:image" content="/seo-projects.png" />
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
          href="/projects"
          icon={FiCompass}
          title="Traveler"
          description="Coming soon..."
        />
      </Main>
    </>
  )
}
