import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '../Common/Button/Button'

import './form.css'

export const Form = ({ updateTimes }) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: ''
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number()
        .required('Number of guests is required')
        .min(1, 'Minimum 1 guest')
        .max(10, 'Maximum 10 guests'),
      occasion: Yup.string().required('Occasion is required')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleChangeDate = (event) => {
    const selectedDate = event.target.value
    formik.handleChange(event)
    updateTimes(selectedDate)
  }

  return (
    <div className='form-container'>
      <form className='booking-form' onSubmit={formik.handleSubmit}>
        <h2>RESERVE A TABLE</h2>
        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          name='date'
          value={formik.values.date}
          onChange={handleChangeDate}
        />
        {formik.touched.date && formik.errors.date
          ? (
            <div className='error'>{formik.errors.date}</div>
            )
          : null}

        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='time'
          value={formik.values.time}
          onChange={formik.handleChange}
        >
          <option value=''>Select a time</option>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
          <option value='21:00'>21:00</option>
          <option value='22:00'>22:00</option>
        </select>
        {formik.touched.time && formik.errors.time
          ? (
            <div className='error'>{formik.errors.time}</div>
            )
          : null}

        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          name='guests'
          value={formik.values.guests}
          onChange={formik.handleChange}
        />
        {formik.touched.guests && formik.errors.guests
          ? (
            <div className='error'>{formik.errors.guests}</div>
            )
          : null}

        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          value={formik.values.occasion}
          onChange={formik.handleChange}
        >
          <option value=''>Select an occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion
          ? (
            <div className='error'>{formik.errors.occasion}</div>
            )
          : null}
        <div className='form-button-container'>
          <Button type='submit' text='Make Your Reservation' />
        </div>
      </form>
    </div>
  )
}
