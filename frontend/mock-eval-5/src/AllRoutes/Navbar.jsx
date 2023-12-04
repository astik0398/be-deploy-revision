import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/contact'}>Contact Management</Link>
        <Link to={'/appointment'}>Appointment Scheduling</Link>
    </div>
  )
}

export default Navbar