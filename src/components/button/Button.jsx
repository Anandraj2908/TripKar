import React from 'react'
import './style.scss'

const Button = ({
    children,
    type='button',
    className='',
    ...props
}) => {
  return (
    <button className={`${className} btnC`}>{children}</button>
  )
}

export default Button

//todo in this file for button design