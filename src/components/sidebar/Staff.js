import React from 'react'
import {WorkOutline,Report,Timeline} from '@mui/icons-material';


const Staff = () => {
  return (
    <div className="sidebar-menu">
                <h3 className="sidebar-title">Staff</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item '>
                        <WorkOutline className='sidebar-icon'/>
                        Manage
             
                    </li>

                    <li className='sidebar-list-item'>
                        <Timeline />
                        Analytics
             
                    </li>

                    <li className='sidebar-list-item'>
                        <Report/>
                        Reports
             
                    </li>

                </ul>
            </div>

  )
}

export default Staff