import React from 'react'
import './NewsSlider.scss'
import newsSliderCover from '../../assets/images/newsSliderCover.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
const NewsSlider = () => {
    return (
        <div className='newsSlider'>
            <img src={newsSliderCover} alt="" className="coverImg" />
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