import React from 'react'
import './NewsLetterSub.scss'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NewsLetterCover from '../../assets/images/NewsLetterCover.png'
import shadow from '../../assets/images/shadow.png'
const NewsLetterSub = () => {
    return (
        <div className='newslettersub'>
            <div className="newsLetterSubContainer">
                <div className="leftContainer">
                    <div className="textContainer">
                        <div className="text">
                            NEWSLETTER SUBSCRIPTION
                        </div>
                    </div>
                    <div className="bottomContainer">
                        <div className="formContainer">
                            <div className="emailContainer">
                                <input type="email" placeholder='shovon.khan0099@gmail.com' className='emailfield' name="" id="" />

                            </div>
                            <div className="btnContainer">
                                <NorthEastIcon className='submitIcon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    
                    <div className="shadowContainer">
                        <img src={shadow} alt="shadow" className="shadow" />
                    </div>
                    <div className="cover">
                        <img src={NewsLetterCover} alt="coverImg" className="coverImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterSub