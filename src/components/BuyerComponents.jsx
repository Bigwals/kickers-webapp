import React from 'react'
import './maincomp.css'
import { FaMapMarkerAlt } from "react-icons/fa";
const Buyer = ({name,date,time,location,RequestID,Service}) => {
  return (
    <div className= 'main-Coponent-crd' style={{marginBottom:'10px'}} >
<div className="row">
    <div className="images-buyer" >
        <div style={{width:'25%'}}>
        {<img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" srcset="" width='60px' height='60px' style={{borderRadius:'6px',objectFit:'cover'}}/> }
        </div>
        
        <h5 className='main-heading-buyer'>{name}</h5>
    </div>
    <div className='sub-div'>
        <h6 className='headingsubtext'>Service</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>{Service}{Service} </p>
         </div>
    <div className='sub-div'> 
    <h6 className='headingsubtext'>Date</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>{Service}16 may 2024 </p>
    </div>
    <div className='sub-div'>
    <h6 className='headingsubtext'>Time</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>{Service}16 may 2024 </p>
         </div>
    <div className='sub-div'>
    <h6 className='headingsubtext'>Agent</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>{Service}16 may 2024 </p>   
         </div>
    {/* <h4 className="headingText">{name}John Doe</h4> */}
    {/* <p className="headingTextPara">{Service}16 may 2024 </p>
    <p className="headingTextPara">{date}16 may 2024 </p>
    <p className="headingTextPara">{time}16 may 2024 </p>
    <p className="headingTextPara">{RequestID}12378 </p> */}
    
    
   
     
</div>

   </div>
  )
}

export default Buyer