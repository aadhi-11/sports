import React from 'react'
import './NewsSlider.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Slider from './slider/Slider';
import newsSliderCover1 from '../../assets/images/newsSliderCover.png'
import newsSliderCover2 from '../../assets/images/Designer (1).png'
import newsSliderCover3 from '../../assets/images/Designer (2).png'
const sliderData = [
    {
        id:1,
        cover:newsSliderCover1,
        sportName:"Football",
        date:'Agence France-Presse - 04 June 2023',
        newshead:'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
        newsDescrip:"The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
    ,
    {
        id:2,
        cover:newsSliderCover2,
        sportName:"Cricket",
        date:'Agence France-Presse - 04 June 2023',
        newshead:'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
        newsDescrip:"The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
    ,{
        id:1,
        cover:newsSliderCover3,
        sportName:"HandBall",
        date:'Agence France-Presse - 04 June 2023',
        newshead:'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
        newsDescrip:"The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
]
const NewsSlider = () => {
    return (
        <div className='newsSlider'>
            <Slider/>

            <div className="slider">
                <div className="sliderContainer">
                    <div className="sliderInside">
                        <div className="arrowkeyLeft">
                            <KeyboardBackspaceIcon className='arrowkey' />
                        </div>
                        <div className="pagenum ">
                            <div className="selected">
                                1
                            </div>
                        </div>
                        <div className="pagenum">
                            2
                        </div>
                        <div className="pagenum">
                            3
                        </div>
                        <div className="arrowkeyRight">
                            <EastIcon className='arrowkey' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSlider