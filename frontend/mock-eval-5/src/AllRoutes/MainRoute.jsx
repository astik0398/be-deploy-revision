import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Appointment from '../Pages/Appointment'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='appointment' element={<Appointment/>}/>
    </Routes>
  )
}

export default MainRoute