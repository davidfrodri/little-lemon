import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { HomePage } from './Routes/HomePage'
import { BookingPage } from './Routes/BookingPage'

import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
