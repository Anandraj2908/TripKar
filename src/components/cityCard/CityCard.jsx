import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.scss'
const CityCard = ({imageSrc,title}) => {
    const navigate = useNavigate()
  return (
    <div className='cityCard' onClick={() => navigate(`/results/${title}`)}>
      <img src={imageSrc} alt={title}/>
      <h2 className='city'>{title}</h2>
    </div>
  )
}

export default CityCard
