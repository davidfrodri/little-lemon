import Logo from '../../assets/icons_assets/logo.png'

import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <img src={Logo} alt='Little Lemon logo' />
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        <div className='copyright'>
          <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
