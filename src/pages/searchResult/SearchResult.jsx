import './style.scss'

import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import HotelDetails from '../../components/hotelDetails/HotelDetails'
import appwriteService from '../../appwrite/config'
import { Query } from 'appwrite'


const SearchResult = () => {
  const {cityName} = useParams();
  
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    appwriteService.getHotels([Query.equal('city', cityName)])
  .then((hotels) => {
    if(hotels)
    setHotels(hotels.documents);
  
  });
  },[])

  
  
  return (
    <Container>
      <div className='mainContainer'>
        <div className="title">Visit {cityName}</div>
        <div className='innerContainer'>
          <div className="innerTitle">Hotels in {cityName}</div>
          <div className="hotelList">
            {hotels.map((hotel, index) => (
              <HotelDetails key={index} hotelId={hotel.$id}  />
            ))}
            </div>
        </div>
      </div>
    </Container>
    
  )
}

export default SearchResult
