import React, { useState } from 'react'
import './NewsSlider.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import SliderComponent from './slider/SliderComponent';
import newsSliderCover1 from '../../assets/images/newsSliderCover.png'
import newsSliderCover2 from '../../assets/images/Designer (1).png'
import newsSliderCover3 from '../../assets/images/Designer (2).png'

const sliderData = [
    {
        id: 1,
        cover: newsSliderCover1,
        sportName: "Football",
        date: 'Agence France-Presse - 04 June 2023',
        newshead: 'Lionel Messi Leaving Ligue 1 Team  \n Paris Saint-Germain, Club Confirms',
        newsDescrip: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
    ,
    {
        id: 2,
        cover: newsSliderCover2,
        sportName: "Cricket",
        date: 'Agence France-Presse - 04 June 2023',
        newshead: 'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
        newsDescrip: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
    , {
        id: 1,
        cover: newsSliderCover3,
        sportName: "HandBall",
        date: 'Agence France-Presse - 04 June 2023',
        newshead: 'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
        newsDescrip: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals"
    }
]

const NewsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= sliderData.length) {
            newIndex = sliderData.length - 1
        }
        setActiveIndex(newIndex)
    }
    return (
        <div className='newsSlider'>
            <div className='inner' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {sliderData.map((data) => {
                    return <SliderComponent data={data} key={data.id} />
                })}
            </div>

            <div className="slider">
                <div className="sliderContainer">
                    <div className="sliderInside">
                        <div className="arrowkeyLeft" 
                            onClick={() => { updateIndex(activeIndex - 1) }}
                            style={{ background: activeIndex === 0 ? '#BAB8B8' : '#262626' }}
                        >
                            <KeyboardBackspaceIcon className='arrowkey' />
                        </div>
                        <div className="pages">
                            {sliderData.map((_, id) => (
                                    <div  key={id} className={` ${id === activeIndex ? "selected" : "pagenum"}`} onClick={() => updateIndex(id)}>
                                        {id + 1}
                                    </div>
                                ))}
                        </div>
                        <div className="arrowkeyRight"
                            onClick={
                                () => {
                                     updateIndex(activeIndex + 1) 
                                }}
                            style={{ 
                                cursor:'pointer',
                                background: activeIndex === sliderData.length - 1 ? '#BAB8B8' : '#262626' 
                            }}
                        >
                            <EastIcon className='arrowkey' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsSlider