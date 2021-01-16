import Head from 'next/head'
import { FiScissors, FiCalendar, FiCompass } from 'react-icons/fi'

import Button from '../components/Button'
import Header from '../components/Header'

import { Main } from '../styles/pages/Home'

export default function Projects(): JSX.Element {
  return (
    <>
      <Head>
        <title>Alexsandro G Bezerra | Links</title>
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
