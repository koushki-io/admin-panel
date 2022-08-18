import React from 'react'
import {MailOutline,DynamicFeed,ChatBubbleOutline} from '@mui/icons-material';


const NotifiCations = () => {
  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">Notifications</h3>
    <ul className='sidebar-list'>
        <li className='sidebar-list-item '>
            <MailOutline className='sidebar-icon'/>
            Mail
 
        </li>

        <li className='sidebar-list-item'>
            <DynamicFeed />
            Feedback
 
        </li>

        <li className='sidebar-list-item'>
            <ChatBubbleOutline/>
            Message
 
        </li>

    </ul>
</div>
  )
}

export default NotifiCations