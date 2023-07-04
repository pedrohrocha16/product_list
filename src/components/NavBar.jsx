import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default NavBar