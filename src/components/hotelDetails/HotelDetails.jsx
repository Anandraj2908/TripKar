import './style.scss'
import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
const HotelDetails = ({details}) => {
    const handelSubmit = (e) => {}
  return (
    <div className="hotelDetails">
        <div className="hotelImage">
            <img src={details.featuredImage} alt={details.name}/>
        </div>
        <div className="hotelInfo">
            <div className="hotelName">{details.name}</div>
            <div className="hotelCity">{details.city}</div>
            <div className="hotelPrice">Rs.{details.price}/night average</div>
            <div className="hotelInfoList">
                {details.hotelInfo.map((info, index) => (
                <div key={index} className="hotelInfoItem">{info}</div>
                ))}
            </div>
        </div>
        <div className="booking">
            <form onSubmit={handelSubmit} className='formC'>
            <Input
                label="Booking Date"
                type="date"    
            />
            <Button type='submit' className="bookBtn">Book Now</Button>
            </form>
            
        </div>
    </div>
    
  )
}

export default HotelDetails
