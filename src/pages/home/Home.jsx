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
          <CityCard imageSrc='https://images.unsplash.com/photo-1642069695904-528045db6443?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Patna'/>
            <CityCard imageSrc='https://images.pexels.com/photos/4873310/pexels-photo-4873310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Mumbai'/>
            <CityCard imageSrc='https://images.pexels.com/photos/14702566/pexels-photo-14702566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Bangalore'/>
          </div>
        </div>
      </Container>
    
  )
}

export default Home
