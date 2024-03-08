import React, { useState } from 'react'
import './Hero.scss'
import bg from '../../assets/images/basketball_sport_icon_in_minimalist_3d_render_2 1.png'
import coverIMg from '../../assets/images/basketball-player-action-sunset 1 (1).png'
import topFrameCover from '../../assets/images/African_women_cover.png'
import bottomFrameCover from '../../assets/images/Car-cover.png'
import thirdCover from '../../assets/images/kohi.jpeg'
const Hero = () => {
    const [more, setMore] = useState(false);

    const Extend = () => {
        setMore(true);
    }
    const Shorten = () => {
        setMore(false)
    }
    return (
        <div className={more ? 'heroExt' : 'hero'}>
            <div className="bgContainer">
                <img src={bg} alt="" srcset="" className='background' />
            </div>
            <div className="mainText">
                <div className="text">
                    TOP SCORER TO THE FINAL MATCH
                </div>
            </div>
            <div className="CentralDiv">
                <div className="cover">
                    <img src={coverIMg} alt="cover" className='img' />
                </div>
                

                    {more ? (
                        <>  
                            <div className="textBoxExt">
                            <div className="paraContainer">
                                <div className='text'>
                                    The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                                    There are many variations of ssary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </div>
                            </div>
                            <div className="buttonContainer2">
                                <div className='btn' onClick={Shorten} >Read Less..</div>
                            </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="textBox">
                            <div className="paraContainer">
                                <div className='text'>
                                    The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                                </div>
                            </div>
                            <div className="buttonContainer">
                                <div className='btn' onClick={Extend} >Continue reading..</div>
                            </div>
                            </div>
                        </>
                    )}

                <div className="rightContainer">
                    <div className="headContainer">
                        <div className="title">
                            Today
                        </div>
                    </div>
                    <div className="topFrame">
                        <img src={topFrameCover} alt="cover" className='coverImg' />
                        <div className="topblendor">
                            <div className="textContainer">
                                <div className="date">
                                    Race98 - 03 June 2023
                                </div>
                                <div className="description">
                                    Ethiopian runners took the top four spots.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="topFrame">
                        <img src={bottomFrameCover} alt="cover" className='coverImg' />
                        <div className="topblendor">
                            <div className="textContainer">
                                <div className="date">
                                    INDYCAR - 03 June 2023
                                </div>
                                <div className="description">
                                    IndyCar Detroit: Dixon quickest in second practice                                </div>
                            </div>
                        </div>

                    </div>
                    {more ? (
                        <div className="topFrame">
                        <img src={thirdCover} alt="cover" className='coverImg' />
                        <div className="topblendor">
                            <div className="textContainer">
                                <div className="date">
                                    ICC WC - 2023
                                </div>
                                <div className="description">
                                   Kohli Scores the Hundred and India wins</div>
                            </div>
                        </div>

                    </div>
                    ) : null}

                </div>
            </div>
        </div>
    )
}

export default Hero
