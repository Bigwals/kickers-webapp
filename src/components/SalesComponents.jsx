import React from 'react'
import './maincomp.css'

import { BsThreeDotsVertical } from "react-icons/bs";


const SalesComponents = (name,service,location) => {
  return (
    
     <div className= 'main-Coponent-crd-2' style={{width:'35%'}} >
        
         <div className="row">

             <div className="images-buyer-2">
                 <div style={{width:'25%'}}>
                     {<img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" srcset="" width='50px' height='50px' style={{borderRadius:'6px',objectFit:'cover'}}/> }
                 </div>
                 <div style={{width:'75%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    
                     <div style={{width:'60px'}}><h4 className='main-heading-buyer-2'>Ground Booking</h4></div>
                     <div style={{marginLeft:'200px'}}>
                         <BsThreeDotsVertical/>
                     </div>
                 </div>
                
                

             </div>
             <div style={{width:'60%',marginTop:'30px'}}><h5>Service</h5> </div>
             <div style={{width:'40%',marginTop:'30px'}}><h6>Booking Ground One</h6> </div>
             <div style={{width:'60%'}}><h5>Location</h5> </div>
             <div style={{width:'40%'}}><h6>ESQ OCAMPO, CENTRO</h6> </div>
                

         </div>
        
        
     </div>
    
  )
}

export default SalesComponents