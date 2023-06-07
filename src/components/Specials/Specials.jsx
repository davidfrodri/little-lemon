import React from 'react'
import { SpecialsCard } from './SpecialsCard'
import { Button } from '../Common/Button/Button'

import './specials.css'

export const Specials = () => {
  return (
    <div className='specials'>
      <div className='specials-container'>
        <div className='specials-up'>
          <div className='specials-title'>
            <h1>This Week's Specials</h1>
          </div>
          <div className='specials-button'>
            <Button text='Online Menu' />
          </div>
        </div>
        <SpecialsCard />
      </div>
    </div>
  )
}
