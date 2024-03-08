import React from 'react'
import './TrendingNews.scss'
import firstNews from '../../assets/images/race-hose 1.png';
import secondNews from '../../assets/images/secondNews.png';
import thirdNews from '../../assets/images/thirdNews.png';
import newsRight from '../../assets/images/newsRight.png'
const TrendingNews = () => {
    return (
        <div className='trending'>
            <div className="left">
                <div className="trendingHead">
                    Trending News
                </div>
                <div className="newsContainer">
                    <div className="newsSection">
                        <div className="imgcontainer">
                            <img src={firstNews} alt="" className='newsImg' />
                        </div>
                        <div className="newsDetailsSection">
                            <div className="top">
                                Race98 - 03 June 2023
                            </div>
                            <div className="middle">
                                6-Year-Old Horse Dies at Belmont Park After Race Injury
                            </div>
                            <div className="bottom">
                                NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s
                            </div>
                        </div>
                    </div>

                    <div className="newsSection">
                        <div className="imgcontainer">
                            <img src={secondNews} alt="" className='newsImg' />
                        </div>
                        <div className="newsDetailsSection">
                            <div className="line"></div>
                            <div className="top">
                                Jony.Ls - 03 June 2023
                            </div>
                            <div className="middle">
                                Savilia Blunk Embraces Longer Season with World Cup                    </div>
                            <div className="bottom">
                                Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some                    </div>
                        </div>
                    </div>

                    <div className="newsSection">

                        <div className="imgcontainer">
                            <img src={thirdNews} alt="" className='newsImg' />
                        </div>
                        <div className="newsDetailsSection">
                            <div className="line"></div>
                            <div className="top">
                                King.F - 03 June 2023                    </div>
                            <div className="middle">
                                Ryan Garcia is fighting again, this time on social media                    </div>
                            <div className="bottom">
                                Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
            <img src={newsRight} alt="newsRight" className="bgimg" />
                <div className="bgContainer">
                    <div className="head">
                        <div className="text">
                            Cycling
                        </div>
                    </div>
                    <div className="lower">
                        <div className="date">
                            Debits - 03 June 2023
                        </div>
                        <div className="description">
                            DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrendingNews
