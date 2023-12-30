import React from 'react'

import './style.scss'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 TripKar</p>
        <NavLink to='/admin'>
        <Button className='admin'>Website Stats</Button>
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
