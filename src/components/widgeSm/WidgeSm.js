import React from 'react'
import "./widgeSm.css"
import {Visibility} from '@mui/icons-material'
import profile from '../../images/profile_User1.jpg'

const WidgeSm = () => {
  return (
    <div className='WidgeSm'>
        <span className="widge-title">
            New Join Members
        </span>
        <ul className="widgeSm-list">


            <li className="widgeSm-list-item">

                <img src={profile} alt="" />

                <div className="widgeSm-User">
                    <span className="widgeSm-UserName">Mahsa Shakeri</span>
                    <span className="widgeSm-UserTitle">Software Enginner</span>
                </div>
                    <button className="widgeSm-btn">
                        <Visibility className="widge-icon"/>
                        Display
                    </button>

            </li>

             <li className="widgeSm-list-item">

                <img src={profile} alt="" />

                <div className="widgeSm-User">
                    <span className="widgeSm-UserName">Mahsa Shakeri</span>
                    <span className="widgeSm-UserTitle">Software Enginner</span>
                </div>
                    <button className="widgeSm-btn">
                        <Visibility className="widge-icon"/>
                        Display
                    </button>

            </li>

            <li className="widgeSm-list-item">

                <img src={profile} alt="" />

                <div className="widgeSm-User">
                    <span className="widgeSm-UserName">Mahsa Shakeri</span>
                    <span className="widgeSm-UserTitle">Software Enginner</span>
                </div>
                    <button className="widgeSm-btn">
                        <Visibility className="widge-icon"/>
                        Display
                    </button>

                </li>


                <li className="widgeSm-list-item">

                    <img src={profile} alt="" />

                    <div className="widgeSm-User">
                        <span className="widgeSm-UserName">Mahsa Shakeri</span>
                        <span className="widgeSm-UserTitle">Software Enginner</span>
                    </div>
                        <button className="widgeSm-btn">
                            <Visibility  className="widge-icon"/>
                            Display
                        </button>

                    </li>



                    <li className="widgeSm-list-item">

                        <img src={profile} alt="" />

                        <div className="widgeSm-User">
                            <span className="widgeSm-UserName">Mahsa Shakeri</span>
                            <span className="widgeSm-UserTitle">Software Enginner</span>
                        </div>
                            <button className="widgeSm-btn">
                                <Visibility  className="widge-icon"/>
                                Display
                            </button>

                        </li>

            

        </ul>
    </div>
  )
}

export default WidgeSm