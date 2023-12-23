import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
function App () {

  return (
    <>
      <NavBar />
      <ItemListContainer message={"Hola mundo"} />
    </>
  )
}

export default App
