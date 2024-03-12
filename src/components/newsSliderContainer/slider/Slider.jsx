import React from 'react'
import './Slider.scss'
import newsSliderCover1 from '../../../assets/images/newsSliderCover.png'

const Slider = () => {

    
    return (
        <div className="insideContainer">
            <img src={newsSliderCover1} alt="" className="coverImg" />
            <div className="newsSliderContainer">
                <div className="head">
                    <div className="text">
                        Football
                    </div>
                </div>
                <div className="newsSesction">
                    <div className="top">
                        Agence France-Presse - 04 June 2023
                    </div>
                    <div className="mid">
                        Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms
                    </div>
                    <div className="bottom">
                        The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
