import React from 'react'
import './newuser.css'

const NewUser = () => {
  return (
    <div className='NewUser'>
        <h1>New User</h1>
        
        <form>
            <div className="new-user-item">
                <label>Username</label>
                <input type="text"
                placeholder='username'
                 />
            </div>

            <div className="new-user-item">
                <label>Full Name</label>
                <input type="text"
                placeholder='full name'
                 />
            </div>

            <div className="new-user-item">
                <label>Email</label>
                <input type="email"
                placeholder='Email'
                 />
            </div>

            <div className="new-user-item">
                <label>password</label>
                <input type="password"
                placeholder='password'
                 />
            </div>

            <div className="new-user-item">
                <label>Phone</label>
                <input type="number"
                placeholder='Phone'
                 />
            </div>
            <div className="new-user-item">
                <label>Address</label>
                <input type="text"
                placeholder='address'
                 />
            </div>
            <div className="new-user-item">
                <label>Gender</label>
             <div className="new-user-gender">
             <input type="radio"
                name='gender'
                id='male'
                value='male'
                 />
            <label for="male">Male</label>
            <input type="radio"
                name='gender'
                id='female'
                value='female'
                 />
            <label for="female">Female</label>

             </div>

            </div>
            <div className="new-user-item">
                <label >Active</label>
                <select name="active" id="active">
                    <option value="yes">yse</option>
                    <option value="no">no</option>
                </select>
            </div>
       
                
       
        </form>
        <button className="new-user-button">
            Create
          </button>

    </div>
  )
}

export default NewUser