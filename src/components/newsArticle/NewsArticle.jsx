import React from 'react'
import './NewsArticle.scss'
import News1Cover from '../../assets/images/News1Cover.png'
import News1Avatar from '../../assets/images/News1Avatar.png'
import News2Cover from '../../assets/images/News2Cover.png'
import News2Avatar from '../../assets/images/News2Avatar.png'
import News3Cover from '../../assets/images/News3Cover.png'
import News3Avatar from '../../assets/images/News3Avatar.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
const NewsList = [
    {
        id: 1,
        cover: News1Cover,
        sport: "Basketball",
        avatar: News1Avatar,
        name: "Jake Will.",
        date: "04 June 2023",
        newsHead: "5 Exercises Basketball Players Should Be Using To Develop Strength",
        description: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles."

    },
    {
        id: 2,
        cover: News2Cover,
        sport: "Hockey",
        avatar: News2Avatar,
        name: "Foxi.zacon",
        date: "03 June 2023",
        newsHead: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
        description: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday."

    },
    {
        id: 3,
        cover: News3Cover,
        sport: "Badminton",
        avatar: News3Avatar,
        name: "Bong Lozada",
        date: "01 June 2023",
        newsHead: "‘Outdoor’ Badminton Gets Support From Local Federation",
        description: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association."

    },
]


const NewsArticle = () => {
    return (
        <div className='sportsArticle' >
            <div className="newsHead">
                <div className="text">
                    Sports Article
                </div>
            </div>
            <div className="newsContainer">
                {NewsList.map((News, id) => (
                    <div key={id} className="eachNewsContainer">
                        <div className="up">
                            <img src={News.cover} alt="" className='newsImg' />
                            <div className="sportsNameContainer">
                                <div className="sportsname">
                                    {News.sport}
                                </div>
                            </div>
                        </div>
                        <div className="down">
                            <div className="top">
                                <div className="left">
                                    <img src={News.avatar} alt="" className="avatar" />
                                </div>
                                <div className="right">
                                    <div className="userName">
                                        {News.name}
                                    </div>
                                </div>
                            </div>
                            <div className="dateContainer">
                                <div className="date">
                                    {News.date}
                                </div>
                            </div>
                            <div className="newsHeadcontainer">
                                <div className="newsHead">
                                    {News.newsHead}
                                </div>
                            </div>
                            <div className="descriptionContainer">
                                <div className="description">
                                    {News.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousalContainer">
                <div className="left">
                    <KeyboardBackspaceIcon className='arrowkeyicon' />
                </div>
                <div className="right">
                    <EastIcon className='arrowkeyicon'/>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle