import React from 'react'
import './maincomp.css'
import { BsThreeDotsVertical } from "react-icons/bs";

const TopCostumer = ({name,totalBookings,totalspent}) => {
  return (
    <div className= 'main-Coponent-crd-2' style={{marginBottom:'10px',width:'100%'}} >
        
    <div className="row" style={{width:'100%'}}>

        <div className="images-buyer-2">
            <div style={{width:'40%'}}>
                {<img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" srcset="" width='50px' height='50px' style={{borderRadius:'6px',objectFit:'cover'}}/> }
            </div>
                <div>
                <h6 className='main-heading-buyer-2'>{name}</h6>
                <p className='main-heading-para'>{totalBookings} Booking</p>
                </div>
              
               
              
            </div>
            
         <div style={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}>
            <div className='main-heading-buyer-2'><h6>Total Spend</h6> </div>
            <div className='main-heading-para'><h6>${totalspent}</h6> </div>
        </div>

    </div>
    
    
</div>
  )
}

export default TopCostumer