import React from 'react'
import './style.css'
const Container = ({children}) => {
  return (
    <div className='contentWrapper'>{children}</div>
  )
}

export default Container
