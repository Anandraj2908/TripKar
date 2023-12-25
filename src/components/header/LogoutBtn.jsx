import React from 'react'

import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

import Button from '../button/Button'

const LogoutBtn = () => {
    const dispatch =  useDispatch();

    const logoutHandeler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div onClick={logoutHandeler} >
      <Button >Logout</Button>
    </div>
  )
}

export default LogoutBtn