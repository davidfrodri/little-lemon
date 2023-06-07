import { useState } from 'react'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Background } from '../components/Common/Background/Background'
import { Form } from '../components/Form/Form'

import Restaurant from '../assets/icons_assets/Mario and Adrian A.jpg'

export const BookingPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [availableTimes, setAvailableTimes] = useState([])

  const updateTimes = (selectedDate) => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    setAvailableTimes(times)
  }

  return (
    <>
      <Header />
      <Background src={Restaurant} alt='Restaurant' height={300} />
      <Form updateTimes={updateTimes} />
      <Footer />
    </>
  )
}
