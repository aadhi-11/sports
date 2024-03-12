import React, { useState } from 'react'
import './NavBar.scss'
import search from '../../assets/images/Vector.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
    const [toggleflag,setToggleFlag]=useState(false)
    return (
        <div className='navBar'>
            <div className="logoContainer">
                <div className='logo'>Sport News</div>
            </div>
            <div className="navItems">
                <ul className='nav-list'>
                        <li className='nav-item' style={{ fontWeight: "700", color: "#262626" }}>Home</li>
                        <li className='nav-item'>Category</li>
                        <li className='nav-item'>Trending News</li>
                        <li className='nav-item'>Recent News</li>
                        <li className='nav-item'>Clubs Ranking</li>
                        <li className='nav-item'>Sports Article</li>
                    </ul>
                {/* <div className="navHome">
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
                </div> */}
            </div>
            <div className="SearchBarContainer">
                <div className="searchIconBox">
                    <img src={search} alt="search" className='icon' />
                </div>
                <div className="searchText">Search</div>
            </div>
            <div className="menu-div">
                {!toggleflag && <MenuIcon className='menu-icon' onClick={() => setToggleFlag(true)} /> }
                {toggleflag && <CloseIcon className='menu-icon' onClick={() => setToggleFlag(false)} />}
                {toggleflag && <div className="burger-menu">
                    <ul className='burger-menu-nav-list'>
                        <li className='burger-menu-list-item'>Home</li>
                        <li className='burger-menu-list-item'>Category</li>
                        <li className='burger-menu-list-item'>Trending News</li>
                        <li className='burger-menu-list-item'>Recent News</li>
                        <li className='burger-menu-list-item'>Clubs Ranking</li>
                        <li className='burger-menu-list-item'>Sports Article</li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default NavBar
