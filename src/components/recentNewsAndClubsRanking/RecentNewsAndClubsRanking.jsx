import React from 'react'
import './RecentNewsAndClubsRanking.scss'
import karate from '../../assets/images/karate.png'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/News2th.png'
import news3 from '../../assets/images/news3.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Table from './tableComponent/Table'
const newsDetails = [
    {
        id: 1,
        img: news1,
        up: "#Pollar. 87 - 12 July 2023",
        down: "Baku 2023 Taekwondo Championships"
    },
    {
        id: 2,
        img: news2,
        up: "#Goft. Toni - 20 July 2023",
        down: "Open Championship Royal Liverpool Golf"
    },
    {
        id: 3,
        img: news3,
        up: "#Cricket. Toni - 27 July 2023",
        down: "Ireland Tour of England Test 2023"
    }
]
const RecentNewsAndClubsRanking = () => {
    return (
        <div className='RecentNewsAndClubsRanking' >
            <div className="left">
                <div className="newsTitle">
                    Recent News
                </div>
                <div className="newsContainer">
                    <div className="coverContainer">
                        <img src={karate} alt="" className="coverimg" />
                        <div className="coverText">
                            <div className="date">
                                Day 5 Highlights
                            </div>
                            <div className="description">
                                Baku 2023 World Taekwondo Championships
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="newsSection">
                            {newsDetails.map((news, id) => (
                                <div key={id} className="eachNews">
                                    <img src={news.img} alt="" className="newsimg" />
                                    <div className="newsRight">
                                        <div className="up">
                                            {news.up}
                                        </div>
                                        <div className="down">
                                            {news.down}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="moreContainer">
                            <div className="morebutton">
                                <div className="moretext">
                                    More
                                </div>
                                <ArrowForwardIcon className='arrow' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="headRight">
                    Clubs Ranking
                </div>
                <div className="tableContainer">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default RecentNewsAndClubsRanking
