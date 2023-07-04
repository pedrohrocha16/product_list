import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import InputSearch from './components/InputSearch'

function App() {
  return (
    <div>
      <NavBar />
      <InputSearch />
      <Outlet />
    </div>
  )
}

export default App
