import './style.scss'
import React, { useEffect, useState } from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import appwriteAuthService from '../../appwrite/auth'
import appwriteConfService from '../../appwrite/config'
import { useNavigate, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HotelDetails = ({hotelId, book, bookingId}) => {
    
    const [bookingDate, setBookingDate] = useState("");

    const [details, setDetails] = useState({
        name: "",
        city: "",
        price: "",
        hotelInfo: [],
        featuredImage: ""
    });

    const userStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    useEffect(() => {
        appwriteAuthService.getCurrentUser()
        .then((user)=> {
            setUserId(user.$id)
        })
        .catch((error) => {
            console.log("Error",error)
        })

        appwriteConfService.getHotel(hotelId)
        .then((hotel) => {
            setDetails(hotel)
        })
        .catch((error) => {
            console.log("Error",error)
        })
    },[])

    const submit = async () => {
        const booking = await appwriteConfService.createBooking(hotelId, userId, bookingDate);
        if(booking) {
            
            navigate('/mybookings')
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        submit()
    }

    const [isDeleted, setIsDeleted] = useState(false);
    const cancelBooking = () =>{
        appwriteConfService.deleteBooking(bookingId).then((status) => {
            if(status) {
                setIsDeleted(true)
            }
        });
        
    }
    const today = new Date().toISOString().split('T')[0];
    if(!isDeleted)
  return (
    <div className="hotelDetails">
        <div className="hotelImage">
            <img src={details.featuredImage} alt={details.name}/>
        </div>
        <div className="hotelInfo">
            <div className="hotelName">{details.name}</div>
            <div className="hotelCity">{details.city}</div>
            {!book && <div className="hotelPrice">Rs.{details.price}/night average</div>}
            {book &&  <div className="bookingDate">Booking Date: {book}</div>} 
            <div className="hotelInfoList">
                {details.hotelInfo.map((info, index) => (
                <div key={index} className="hotelInfoItem">{info}</div>
                ))}
            </div>
        </div>
        {!book && userStatus && 
            <div className="booking">
            <form onSubmit={handelSubmit} className='formC'>
            <Input
                label="Booking Date"
                type="date"
                onChange={(e) => setBookingDate(e.target.value)}
                required
                min={today}
            />
            <Button type='submit' className="bookBtn">Book Now</Button>
            </form>
            
            </div>
        }
        {book && userStatus &&
            <div className="booking" onClick={cancelBooking}>
                <Button >Cancel Booking</Button>
            </div>
        }
        {
            !userStatus &&
            <NavLink className="booking" to='/login'><Button >Login to Book</Button></NavLink>
        }
    </div>
    
  )
}

export default HotelDetails
