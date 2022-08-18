import React from 'react'
import {NotificationsNone,Settings,Language} from '@mui/icons-material';
import './topBar.css'
import profile from '../../images/profile.jpg'

const TopBar = ({setsidebarShow}) => {
  return (
    <div
    className='topBar'>
        <div className="topBar-wrapper">
            <div className="top-left">
               <span 
               onClick={()=>{
                setsidebarShow(last=>!last)
               }}
               className='logo'>
                koushki
               </span>
            </div>
            <div className="top-right">

              {/* start  icone  */}
                <div className="top-icon">
                    <NotificationsNone/>
                    <span className='top-icon-badge'>2</span>
                </div>
                {/* end  icone  */}

                 {/* start  icone  */}
                 <div className="top-icon">
                    <Settings/>
                    <span className='top-icon-badge'>1</span>
                </div>
                {/* end  icone  */}

                 {/* start  icone  */}
                 <div className="top-icon">
                    <Language/>
                    <span className='top-icon-badge'>4</span>
                </div>
                {/* end  icone  */}

                    <img className='profile' src={profile} alt="profile"  />
              




            </div>
        </div>

    </div>
  )
}

export default TopBar