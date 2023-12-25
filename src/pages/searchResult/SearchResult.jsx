import './style.scss'

import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import HotelDetails from '../../components/hotelDetails/HotelDetails'

const SearchResult = () => {
  const {cityName} = useParams();
  const details1 = {
    name: 'Hotel 1',
    price: '100',
    city: 'City 1',
    hotelInfo: ['Info 1', 'Info 2', 'Info 3'],
    featuredImage:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  const details2 = {
    name: 'Hotel 2',
    price: '200',
    city: 'City 2',
    hotelInfo: ['Info 1', 'Info 2', 'Info 3'],
    featuredImage:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  const details3 = {
    name: 'Hotel 3',
    price: '300',
    city: 'City 3',
    hotelInfo: ['Info 1', 'Info 2', 'Info 3'],
    featuredImage:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  const details4 = {
    name: 'Hotel 4',
    price: '400',
    city: 'City 4',
    hotelInfo: ['Info 1', 'Info 2', 'Info 3'],
    featuredImage:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  const details5 = {
    name: 'Hotel 5',
    price: '500',
    city: 'City 5',
    hotelInfo: ['Info 1', 'Info 2', 'Info 3'],
    featuredImage:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  
  return (
    <Container>
      <div className='mainContainer'>
        <div className="title">Visit {cityName}</div>
        <div className='innerContainer'>
          <div className="innerTitle">Hotels in {cityName}</div>
          <div className="results">
            <HotelDetails 
              details={details1}
            />
            <HotelDetails 
              details={details2}
            />
            <HotelDetails 
              details={details3}
            />
            <HotelDetails 
              details={details4}
            />
            <HotelDetails 
              details={details5}
            />
          </div>
        </div>
      </div>
    </Container>
    
  )
}

export default SearchResult
