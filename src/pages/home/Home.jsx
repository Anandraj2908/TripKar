import React from 'react'
import Container from '../../components/container/Container'

import SearchBanner from '../../components/searchBanner/SearchBanner'
import CityCard from '../../components/cityCard/CityCard'

import './style.scss'
const Home = () => {
  return (
    
      <Container>
        <div className='homeContainer'>
          <SearchBanner/>
          <div className='cityCards'>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
          </div>
          <div className='cityCards'>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' cityName='London'/>
          </div>
        </div>
      </Container>
    
  )
}

export default Home
