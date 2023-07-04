import Gallery from "./components/Gallery"
import Header from "./components/Header"
import { useEffect, useState } from 'react'
import { getStays } from "./services/stays"
import { Stay } from "./types"
import SearchModal from "./components/SearchModal"
function App() {
  const [stays, setStays] = useState<Stay[]>([])
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  useEffect(() => {
    setStays(getStays())
  }, [])
  return (
    <>
      <Header setModalVisible={setModalVisible} />
      <Gallery stays={stays} />
      <SearchModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </>
  )
}

export default App
