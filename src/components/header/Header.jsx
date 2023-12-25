import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import LogoutBtn from './LogoutBtn'
import Button from '../button/Button'

import './style.scss'
const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate();

    //nav items are stored in an array
    const navItems = [
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
            name:"Login",
            slug:"/login",
            active: !authStatus
        },
        {
            name:"Signup",
            slug:"/signup",
            active: !authStatus
        },
        {
            name:"Bookings",
            slug:"/mybookings",
            active:authStatus
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    

  return (
    <Container>
    <header className='headerContainer'>
        
            <nav className='navbar'>
                <div className='logo navChild'>TripKar</div>
                <div className="navChild hamburger">
                    <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                    </div>
                </div>
                <ul className={`navItems navChild ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => 
                    item.active ? (
                        <li className='navItem' key={item.name} onClick={() => navigate(item.slug)}>
                            <Button  >
                                {item.name}
                            </Button>
                        </li>
                    ) : null)}
                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        
    </header>
    </Container>
  )
}

export default Header