import React from 'react'
import './Category.scss'
import footBall from '../../assets/images/footBall.png'
import basketBall from '../../assets/images/basketBall.png'
import sportsCar from '../../assets/images/sportsCar.png'
import tableTennis from '../../assets/images/tableTennis.png'
const Category = () => {
  return (
    <div className='category'>
      <div className="categoryHeading">
        Category
      </div>
      <div className="categoryContainer">
        <div className="SportsContainer">
            <div className="sportsHead1">
                <div className="text1">
                    FOOTBALL
                </div>
            </div>
            <div className="sportsImgcontainer1">
                <img src={footBall} alt="" className='sportsImg1' />
            </div>
        </div>
        <div className="SportsContainer">
            
            <div className="sportsImgcontainer2">
                <img src={basketBall} alt="" className='sportsImg2' />
            </div>
            <div className="sportsHead2">
                <div className="text2">
                    BASCKET BALL
                </div>
            </div>
        </div>
        <div className="SportsContainer">
            <div className="sportsHead1">
                <div className="text1">
                    SPORTSCAR
                </div>
            </div>
            <div className="sportsImgcontainer1">
                <img src={sportsCar} alt="" className='sportsImg1' />
            </div>
        </div>
        <div className="SportsContainer">
            
            <div className="sportsImgcontainer2">
                <img src={tableTennis} alt="" className='sportsImg2' />
            </div>
            <div className="sportsHead2">
                <div className="text2">
                    TABLE
                    TENNIS
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
