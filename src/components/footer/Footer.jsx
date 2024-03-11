import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import facebook from '../../assets/images/facebook.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="leftContainer">
                <div className="eachIcon">
                    <a href="https://www.facebook.com/adithyadas.pattambi.3/">
                        <img src={facebook} alt="" className="icon" />
                    </a>
                </div>
                <div className="eachIcon">
                    <a href="https://www.instagram.com/_._aadhii._._/">
                        <InstagramIcon className='icon' />
                    </a>
                </div>
                <div className="eachIcon">
                    <a href="https://twitter.com/TrollAmigoz">
                        <TwitterIcon className='icon' />
                    </a>
                </div>

            </div>
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
    )
}

export default Footer