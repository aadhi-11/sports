import React from 'react'
import './Home.scss'
import NavBar from '../components/navbar/NavBar'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <div className="homeContainer">
          <Hero/>
            home container
        </div>
    </div>
  )
}

export default Home