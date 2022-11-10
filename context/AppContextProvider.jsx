import AppContext from 'context/app'
import { donationPoints } from 'db/index'
import { useState, useEffect } from 'react'
import { getArticles } from 'connectors/getArticles'

export default function AppContextProvider({ children }) {
  const setContextState = (value) => {
    setContext(value)
  }

  // initialization of state context
  const [contextState, setContext] = useState({
    donationPoints,
    donate: {
      stepActive: 0,
    },
    setContextState,
  })
  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  )
}
