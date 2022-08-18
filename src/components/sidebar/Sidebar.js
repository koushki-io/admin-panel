import React from 'react'
import './sidebar.css'
import Dashbord from './Dashbord';
import QuikMenu from './QuikMenu';
import NotifiCations from './Notifications';
import Staff from './Staff';


const Sidebar = ({setsidebarShow,sidebarShow}) => {
  return (
    <div className={sidebarShow ? 'sidebar' : "hidedn"} >
        <div className="sidebar-wrapper">
                 <Dashbord/>
                 <QuikMenu/>
              <NotifiCations/>
              <Staff/>
                

        </div>

    </div>
  )
}

export default Sidebar