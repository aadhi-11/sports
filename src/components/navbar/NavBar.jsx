import React from 'react'
import './NavBar.scss'
import search from '../../assets/images/Vector.png'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logoContainer">
        <div className='logo'>Sport News</div>
      </div>
      <div className="navItems">
        <div className="navHome">
            <div className="hometext">
                Home
            </div>
        </div>
        <div className="navCategory">
            <div className="Categorytext">
                Category
            </div>
        </div>
        <div className="navTrending">
            <div className="trendingtext">
                Trending News
            </div>
        </div>
        <div className="navRecent">
            <div className="recenttext">
                Recent News
            </div>
        </div>
        <div className="navranking">
            <div className="rankingtext">
                Clubs Ranking
            </div>
        </div>
        <div className="navArticle">
            <div className="articletext">
                Sports Article
            </div>
        </div>
      </div>
      <div className="SearchBarContainer">
        <div className="searchIconBox">
            <img src={search} alt="search" className='icon' />
        </div>
        <div className="searchText">Search</div>
      </div>
    </div>
  )
}

export default NavBar
