import React from 'react'
import './maincomp.css'

const TopGrounds = ({totalSales,groundName,processedOrders,averageMonthlySales}) => {
  return (
    <div className= 'main-Coponent-crd' style={{marginBottom:'10px'}} >
        
<div style={{background:'#f4f4f4',padding:'20px',border:'.5px solid',borderRadius:'15px'}}>
<h5 className='main-heading-buyer'>{groundName}</h5>
    <div className='sub-div-2'>
        <h6 className='headingsubtext'>Processed Orders</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>{processedOrders}</p>
         </div>
    <div className='sub-div-2'> 
    <h6 className='headingsubtext'>Avergae Sales</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>${averageMonthlySales} </p>
    </div>
    <div className='sub-div-2'>
    <h6 className='headingsubtext'>Total Sales(30 Days)</h6>
         <p className="headingTextPara" style={{color:'black',fontWeight:600}}>${totalSales}</p>
         </div>
   
    
    
    
   
     
</div>

   </div>
  )
}

export default TopGrounds