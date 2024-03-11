import React from 'react'
import './Home.scss'
import NavBar from '../components/navbar/NavBar'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import TrendingNews from '../components/trending/TrendingNews'
import NewsSlider from '../components/newsSliderContainer/NewsSlider'
import RecentNewsAndClubsRanking from '../components/recentNewsAndClubsRanking/RecentNewsAndClubsRanking'
import NewsArticle from '../components/newsArticle/NewsArticle'
import NewsLetterSub from '../components/newsLetterSub/NewsLetterSub'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <div className="homeContainer">
          <Hero/>
          <Category/>
          <TrendingNews/>
          <NewsSlider/>
          <RecentNewsAndClubsRanking/>
          <NewsArticle/>
          <NewsLetterSub/>
          <Footer/>
            home container
        </div>
    </div>
  )
}

export default Home