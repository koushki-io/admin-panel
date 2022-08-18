import React from 'react'
import "./widgeLg.css"
import profile from '../../images/profile_User2.jpg'

const WidgeLg = () => {
  const Button=({type})=>{
return <button className={"widgeLg-Button "+ type}>{type}</button>
  }
  return (
    <div className='WidgeLg'>
      <h3 className="widgeLg-title"> Lates Transactoin</h3>

          <table className="widgeLg-table">
            <tr className='widgeLg-tr'>
              <th className='widgeLg-th'>Customer</th>
              <th className='widgeLg-th'>Date</th>
              <th className='widgeLg-th'>Amount</th>
              <th className='widgeLg-th'>Status</th>
            </tr>
            <tr className='widgeLg-tr' >
              <td className='widgeLg-user'>
                <img src={profile} alt="User" />
                <span className="widgeLg-name">Amir Lotfi</span>
                </td>
                <td className='widgeLg-date'>15 aug 2022</td>
                <td className='widgeLg-amount'>$150.00</td>
                <td className='widgeLg-status'>
                  <Button type="Approved"/>
                </td>
            </tr>

            <tr className='widgeLg-tr' >
              <td className='widgeLg-user'>
                <img src={profile} alt="User" />
                <span className="widgeLg-name">Amir Lotfi</span>
                </td>
                <td className='widgeLg-date'>15 aug 2022</td>
                <td className='widgeLg-amount'>$150.00</td>
                <td className='widgeLg-status'>
                  <Button type="pending"/>
                </td>
            </tr>

            <tr className='widgeLg-tr' >
              <td className='widgeLg-user'>
                <img src={profile} alt="User" />
                <span className="widgeLg-name">Amir Lotfi</span>
                </td>
                <td className='widgeLg-date'>15 aug 2022</td>
                <td className='widgeLg-amount'>$150.00</td>
                <td className='widgeLg-status'>
                  <Button type="declined"/>
                </td>
            </tr>

            <tr className='widgeLg-tr' >
              <td className='widgeLg-user'>
                <img src={profile} alt="User" />
                <span className="widgeLg-name">Amir Lotfi</span>
                </td>
                <td className='widgeLg-date'>15 aug 2022</td>
                <td className='widgeLg-amount'>$150.00</td>
                <td className='widgeLg-status'>
                  <Button type="Approved"/>
                </td>
            </tr>
          </table>


    </div>
  )
}

export default WidgeLg