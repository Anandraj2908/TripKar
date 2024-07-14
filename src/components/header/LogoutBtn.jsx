import React from 'react'

import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const dispatch =  useDispatch();
    const navigate = useNavigate();

    const logoutHandeler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
        navigate('/')
    }
  return (
    <div onClick={logoutHandeler} >
      <Button >Logout</Button>
    </div>
  )
}

export default LogoutBtn
