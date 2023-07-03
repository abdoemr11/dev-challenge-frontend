import Gallery from "./components/Gallery"
import Header from "./components/Header"
import { useEffect, useState } from 'react'
import { getStays } from "./services/stays"
import { Stay } from "./types"
import SearchModal from "./components/SearchModal"
function App() {
  const [stays, setStays] = useState<Stay[]>([])
  useEffect(() => {
    setStays(getStays())
  }, [])
  return (
    <>
      <Header />
      <Gallery stays={stays} />
      <SearchModal />
    </>
  )
}

export default App
