import { NavLink } from 'react-router-dom'

import Logo from '../../assets/icons_assets/logo.jpg'

import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink to='/'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <ul className='nav-list'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Reservations</a></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
      </nav>
    </header>
  )
}
