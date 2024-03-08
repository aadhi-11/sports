import React from 'react'
import './Home.scss'
import NavBar from '../components/navbar/NavBar'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import TrendingNews from '../components/trending/TrendingNews'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <div className="homeContainer">
          <Hero/>
          <Category/>
          <TrendingNews/>
            home container
        </div>
    </div>
  )
}

export default Home