import React, {useState, useEffect} from 'react'
import {banner1} from '../../assets/index.js'
import Button from '../button/Button'

import './style.scss'
import { useNavigate } from 'react-router-dom'
const SearchBanner = () => {
    const navigate = useNavigate()
    

      const [searchInput, setSearchInput] = useState('');
      
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results/${searchInput}`)
      };
  
  return (
    <div className="carousel">
      <div className="carousel-images">
        <img className='image' src={banner1}  />
      </div>
        <form className="searchBar" onSubmit={handleSubmit}>
        <input  
          placeholder="Mumbai.."
          className='searchInput'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='searchBtn' type='submit'>Search</Button>
        </form>
      
    </div>
  )
}

export default SearchBanner
