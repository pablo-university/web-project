import Head from 'next/head'
import '../styles/globals.css'
import { BASE_PATH } from 'utils/index'
import AppContext from "context/app";
import {  donationPoints } from "db/index";
import { useState, useEffect } from "react";
import { getArticles } from "connectors/getArticles";


function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useState(null);
  useEffect( () => {
    const init = async () => {
      const articles = await getArticles()
      setArticles(articles)
    }
    init()
  }, [])
  
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
      <AppContext.Provider value={{
        // pages, 
        donationPoints,
        articles
      }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default MyApp
