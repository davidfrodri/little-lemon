import Logo from '../assets/icons_assets/Logo.svg'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={Logo} alt='logo' />
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
