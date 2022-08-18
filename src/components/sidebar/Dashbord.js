import React from 'react'
import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'

const Dashbord = () => {
    
    const navigate= useNavigate();
    const clickHandler=()=>{
        navigate("/Home")
    }   
    
  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">dashboard</h3>
    <ul className='sidebar-list'>
        <li 
        onClick={clickHandler}
        className='sidebar-list-item active'>
            <LineStyle className='sidebar-icon'/>
            Home
 
        </li>

        <li className='sidebar-list-item'>
            <Timeline />
            Analytics
 
        </li>

        <li className='sidebar-list-item'>
            <TrendingUp/>
            Sales
 
        </li>

    </ul>
</div>

  )
}

export default Dashbord