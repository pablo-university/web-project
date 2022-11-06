import Head from 'next/head'
import '../styles/globals.css'
import { BASE_PATH } from 'utils/index'
import AppContextProvider from "context/AppContextProvider";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Hemocentro</title>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${BASE_PATH}/favicon_io/favicon.ico`}
        ></link>
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}

export default MyApp
