import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import './styles/global.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
