import React from 'react'
import './Slider.scss'
import newsSliderCover1 from '../../../assets/images/newsSliderCover.png'

const Slider = ({data}) => {

    
    return (
        <div className="insideContainer">
            <img src={data.cover} alt="" className="coverImg" />
            <div className="newsSliderContainer">
                <div className="head">
                    <div className="text">
                        {data.sportName}
                    </div>
                </div>
                <div className="newsSesction">
                    <div className="top">
                        {data.date}
                    </div>
                    <div className="mid">
                        {data.newshead}
                    </div>
                    <div className="bottom">
                        {data.newsDescrip}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider