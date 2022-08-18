import React from 'react'
import './featuredinfo.css'
import { ArrowDownward,ArrowUpward } from '@mui/icons-material'

const Featuredinfo = () => {
  return (
    <div 
    className='featuredinfo'>

        <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
                <span className="featured-money">$2,456</span>
                <span className="featured-money-rate">
                    -11.56 <ArrowDownward className="featured-icon negative"/>
                    
                </span>
            </div>
            <span className="featured-sub"> Compared to last  month</span>

        </div>


        <div className="featured-item">
            <span className="featured-title">Sale</span>
            <div className="featured-money-container">
                <span className="featured-money">$4,378</span>
                <span className="featured-money-rate">
                    -1.56 <ArrowDownward  className="featured-icon negative"/>
                    
                </span>
            </div>
            <span className="featured-sub"> Compared to last  month</span>

        </div>



        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className="featured-money">$1,98</span>
                <span className="featured-money-rate">
                    +1.3 <ArrowUpward className="featured-icon"/>
                    
                </span>
            </div>
            <span className="featured-sub"> Compared to last  month</span>

        </div>


    </div>
  )
}

export default Featuredinfo