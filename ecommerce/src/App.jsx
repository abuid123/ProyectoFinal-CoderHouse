import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
function App () {

  return (
    <>
      <NavBar />
      <ItemListContainer message={"Hola mundo"} />
    </>
  )
}

export default App
