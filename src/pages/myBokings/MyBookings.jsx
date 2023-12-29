import './style.scss'
import React,{ useEffect, useState} from 'react'
import Container from '../../components/container/Container'
import appwriteAuthService from '../../appwrite/auth'
import appwriteService from '../../appwrite/config'
import HotelDetails from '../../components/hotelDetails/HotelDetails'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'

const MyBookings = () => {
  const [hotels, setHotels] = useState([]);
  

    useEffect(() => {
        appwriteAuthService.getCurrentUser()
        .then((user)=> {
          appwriteService.getBookings([Query.equal('userId', user.$id)])
          .then((bookings) => {
            setHotels(bookings.documents)
          })
          .catch((error) => {
            console.log("Get my Bookings Error ",error)
          })
        })
        .catch((error) => {
            console.log("Get current user error: ",error)
        }) 


        
    },[])
    console.log(hotels)
  
  return (
    <Container>
      <div className='mainContainer'>
        <div className="title">My Bookings</div>
        <div className='innerContainer'>
          <div className="hotelList">
            { hotels.map((hotel, index) => (
              <HotelDetails key={index} hotelId={hotel.hotelId} book={hotel.bookingDate} bookingId={hotel.$id}/>
            ))}
            </div>
        </div>
      </div>
    </Container>
  )
}

export default MyBookings
