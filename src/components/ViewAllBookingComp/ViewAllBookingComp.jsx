import React from 'react'
import './ViewAllBookingComp.css'
import image from "../../assets/images/first.png"

const ViewAllBookingComp = ({handleClick}) => {
  return (
    <div className='ViewAllBookings'  onClick={handleClick}>
        
    <div className='BuyerSub'>
        
        
    <div className='DetailItem' style={{display:'flex',flexDirection:'row'}}>
    <img src={image}alt="" srcset="" />
    <div >
        <h6>ID</h6>
        <p>{'# A-1234'}</p>
    </div>
    <div className='twoCol'>
       <div className='col3'>
        <h6>Status</h6>
        <p>{'Completed'}</p>
      </div>
      <div className='col3'>
        <h6>Total Spend</h6>
        <p>{'2500 AED'}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ViewAllBookingComp