
import React from 'react'
import './FeatureedCourtComp.css'
import { Button } from '@mui/material'
import { IoIosArrowForward } from "react-icons/io";
const FeaturedCourtComp = ({name,image,openTiming,ClosedTiming,Location,textFeaturecourt,HandleClick}) => {
  return (
    <div className='FeaturedCourtRow'>
       
        <div className='FeaturedSub'>
            
        
        <div className='DetailItem' >
        <img src={image}alt="" srcset="" />
        <div >
        <h6>Name</h6>
        <p>{name}</p>
        </div>
           
        </div>
        <div className='DetailItem'>
          <h6>Location:</h6>
          <p>{Location}</p>
        </div>
        <div className='mobileFlex'>
          <div className=''>
            <h6>ClosedTiming</h6>
            <p>{ClosedTiming}</p>
          </div>
         <div className=''>
            <h6>Open Timing</h6>
            <p>{openTiming}</p>
          </div>
        </div>
        <div className='Buyer-sub-div-button' >
          <Button onClick={HandleClick} id="buyer-buttonAll" >{textFeaturecourt} <IoIosArrowForward /></Button>
        </div>
       
        
        
        </div>
    </div>
  )
}

export default FeaturedCourtComp