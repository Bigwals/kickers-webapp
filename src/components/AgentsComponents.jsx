import React from 'react'
import './newBuyer/Buyer.css'
import { Button } from '@mui/material'
import { IoIosArrowForward } from "react-icons/io";
const AgentsComponents = ({name, date, time, location, RequestID, Service,data}) => {
  return (
    <div className='buyerRow' style={{background: '#f4f4f4'}}>
      <div>

        <div className='nameImg'>
          {<img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" srcset="" width='50px' height='50px' style={{ borderRadius: '6px', objectFit: 'cover' }} />}
          <div className='headingDiv-buyer'>
            <h3>{name}</h3>
          </div>
        </div>

      </div>
      <div className='Buyer-sub-div'>


        <div>
          <h6>Service</h6>
          <p>{Service}</p>
        </div>
        <div>
          <h6>Date</h6>
          <p>{date}
          </p>
        </div>
        <div> <h6>Time</h6>
          <p>{time}</p>
        </div>
        <div> <h6>Request ID</h6>
          <p>{RequestID}</p></div>

        <div className='Buyer-sub-div-button' >
          <Button id="buyer-buttonAll" >Remove <IoIosArrowForward /></Button>
        </div>






      </div>

    </div>
  )
}

export default AgentsComponents