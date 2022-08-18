import React from 'react'
import { UserData } from '../../../Data/data'
import Chart from '../../chart/Chart'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import WidgeLg from '../../widgeLg/WidgeLg'
import WidgeSm from '../../widgeSm/WidgeSm'

import './home.css'


const Home = () => {
  return (
    <div className="Home">
      <Featuredinfo/>
      <Chart  title="User Analytics"  UserData={UserData} dataKey1="uv" dataKey2="pv" dataKey3="amt"  grid/>
      
      <div className="homeWidge">
      <WidgeSm/>
      <WidgeLg/>

      </div>
      

    </div>
  )
}

export default Home