import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="author" content="John Doe" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
