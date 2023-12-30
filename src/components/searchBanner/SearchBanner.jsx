import React, {useState, useEffect} from 'react'
import {hotel1,hotel2, hotel3, banner1} from '../../assets/index.js'
import hotel5 from '../../assets/hotel5.jpg'
import Button from '../button/Button'

import './style.scss'
import { useNavigate } from 'react-router-dom'
const SearchBanner = () => {
    const images = [hotel1,hotel2,hotel3,hotel5,banner1]
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate()

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 2000); 
    
        return () => clearInterval(interval);
      }, []);

      const [searchInput, setSearchInput] = useState('');
      
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results/${searchInput}`)
      };
  
  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img className='image' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        
      </div>
        <form className="searchBar" onSubmit={handleSubmit}>
        <input  
          placeholder="Mumbai"
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
