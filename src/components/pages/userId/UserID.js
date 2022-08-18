import React from 'react'
import{useNavigate, useParams} from 'react-router-dom'
import './user.css'
import profile1 from '../../../images/profile_list1.jpg'
import profile2 from '../../../images/profile_list2.jpg'
import profile3 from '../../../images/profile_list3.jpg'
import profile4 from '../../../images/profile_list4.jpg'
import profile5 from '../../../images/profile_list5.jpg'
import profile6 from '../../../images/profile_list6.jpg'
import profile7 from '../../../images/profile_list7.jpg'
import profile8 from '../../../images/profile_list8.jpg'
import profile9 from '../../../images/profile_list9.jpg'
import profile10 from '../../../images/profile_list10.jpg'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid ,Publish} from '@mui/icons-material'
import { userRows } from '../../../Data/data'

const UserID = () => {
  const profile=[profile1,profile2,profile3,profile4,profile5,profile6,profile7,profile8,profile9,profile10]
    const {id}=useParams()
     const navigate= useNavigate()

     const craeteHandler=()=>{
          navigate("/newuser")
     }
  return (
    <div className='userId'>
      <div className="userId-title">
        <h3>Edit User</h3>
        <button
        onClick={craeteHandler}
        >Create</button>
      </div>
      <div className="user-container">
      <div className="user-show">
        <div className="user-show-top">
          <img src={profile[id -1]} alt="profile" />
          <div className="user-show-title">
            <span className='user-username'>{userRows[id -1].username}</span>
            <span className='user-username-title'>{userRows[id -1].jobTitle}</span>
          </div>
        </div>

          <div className="user-show-bottom">
              <span className="user-bottom-title">Acconet Details</span>
                    
                    <div className="user-bottom-info">
                      <PermIdentity classname="user-show-icon"/>
                          <span className="user-show-info">{userRows[id -1].username}99</span>
                    </div>
                    <div className="user-bottom-info">
                      <CalendarToday classname="user-show-icon"/>
                          <span className="user-show-info">10.6.1999</span>
                    </div>
                    <span className="user-bottom-title">Contact Details</span>

                    <div className="user-bottom-info">
                      <PhoneAndroid classname="user-show-icon"/>
                          <span className="user-show-info">+1 123 456 789</span>
                    </div>

                    <div className="user-bottom-info">
                      <MailOutline classname="user-show-icon"/>
                          <span className="user-show-info">{userRows[id -1].email}</span>
                    </div>

                    <div className="user-bottom-info">
                      <LocationSearching classname="user-show-icon"/>
                          <span className="user-show-info">Theran | Mirdamad</span>
                    </div>

          </div>

      </div>


      <div className="user-update">
        <span className="update-title">Edite</span>
        <form>
          <div className="update-left">

            <div className="update-left-item">
              <label>Username</label>
              <input type="text" placeholder='saraahmadi99'  />
            </div>

            <div className="update-left-item">
              <label>Full Name</label>
              <input type="text" placeholder='Sara Ahmadi'  />
            </div>

            <div className="update-left-item">
              <label>Email</label>
              <input type="text" placeholder='saraahmadi99@gmail.com'  />
            </div>

            <div className="update-left-item">
              <label>Phone</label>
              <input type="text" placeholder='+1 123 456 789'  />
            </div>

            <div className="update-left-item">
              <label>Address</label>
              <input type="text" placeholder='Theran | Mirdamad'  />
            </div>

            


          </div>
          <div className="update-right">
            <div className="user-update-upload">
              <img src={profile[id -1]} alt="profile" />
              <label htmlFor="file"><Publish className="user-update-icon"/></label>
              <input type="file" id='file'  style={{display:"none"}}/>
            </div>
            <button className="user-update-btn">Update</button>
          </div>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default UserID