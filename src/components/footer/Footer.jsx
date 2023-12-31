import React from 'react'

import './style.scss'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Footer = () => {
  const user = useSelector(state => state.auth.userData);
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 TripKar</p>
        {/* <NavLink to='/admin'>
        <Button className='admin'>Website Stats</Button>
        </NavLink> */}
        {user && 
        <h3> It's {user.name}</h3>
        }
        
      </div>
    </footer>
  )
}

export default Footer
