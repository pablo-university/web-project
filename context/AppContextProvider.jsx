import AppContext from 'context/app'
import { donationPoints } from 'db/index'
import { useState, useEffect } from 'react'
import { getArticles } from 'connectors/getArticles'

export default function AppContextProvider({ children }) {
  // initialization of state context
  const [contextState, setContextState] = useState({
    donationPoints,
    donate: {
      stepActive: 0,
    },
  })

  /**
   * get articles
   * set articles on app context
   * set setContext
   * */
  useEffect(() => {
    const init = async () => {
      const articles = await getArticles()
      setContextState({
        ...contextState,
        setContextState,
        articles,
      })
    }
    init()
  }, [])
  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  )
}
