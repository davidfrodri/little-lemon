import { Button } from '../Common/Button/Button'
import MainImg from '../../assets/icons_assets/gourmet.jpg'

import './main.css'

export const Main = () => {
  return (
    <main className='main'>
      <div className='main-container'>
        <div className='main-left'>
          <h1 className='main-title'>Little Lemon</h1>
          <h2 className='main-subtitle'>Chicago</h2>
          <p className='main-p'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button text='Reserve a Table' />
        </div>
        <img src={MainImg} alt='Restaurant Food' />
      </div>
    </main>
  )
}
