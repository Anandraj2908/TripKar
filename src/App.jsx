import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import './styles/global.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import appwriteAuthService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import {login} from './store/authSlice'

function App() {

  const dispatch = useDispatch()
  const getUser = async () => {
    const user =await appwriteAuthService.getCurrentUser()
    if(user){
      dispatch(login(user))
    }
  }
  
  useEffect(() => {
    getUser()
  }, []);
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
