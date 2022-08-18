import React from 'react'
import {useNavigate} from 'react-router-dom'

import {PermIdentity,Storefront,AttachMoney,Equalizer} from '@mui/icons-material';

const QuikMenu = () => {

        const navigate= useNavigate();
        const clickHandler=()=>{
            navigate("/users")
        }    

  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">Quik Menu</h3>
    <ul className='sidebar-list'>
        <li 
        onClick={clickHandler} className='sidebar-list-item '>
            <PermIdentity className='sidebar-icon'/>
            Users
 
        </li>

        <li 
        onClick={()=>{
            navigate("/products")
        }}
        className='sidebar-list-item'>
            <Storefront />
            Products
 
        </li>

        <li className='sidebar-list-item'>
            <AttachMoney/>
            Transations
 
        </li>
        <li className='sidebar-list-item'>
            <Equalizer/>
            Reports
 
        </li>

    </ul>
</div>
  )
}

export default QuikMenu