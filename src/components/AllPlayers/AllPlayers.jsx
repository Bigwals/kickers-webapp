import React from 'react'
import './Allplayers.css';


const AllPlayers = ({name,image,openTiming,ClosedTiming,Location,Handle}) => {
  return (
    <div className='AllplayersRow'>
       
        <div className='BuyerSub'>
            
        
        <div className='DetailItem' style={{display:'flex',flexDirection:'row'}}>
        <img src={image}alt="" srcset="" />
        <div >
        <h6>Name</h6>
        <p>{name}</p>
        </div>
           
        </div>
        <div className='DetailItem'>
          <h6>Location:</h6>
          <p elevation={1} >{Location.slice(0,30)}</p>
        </div>
        <div className='twoCol'>
           <div className='col3'>
            <h6>ClosedTiming</h6>
            <p>{ClosedTiming}</p>
          </div>
          <div className='col3'>
            <h6>Open Timing</h6>
            <p>{openTiming}</p>
          </div>
        </div>
 
       
        <div className='display-flex'>
          <button onClick={Handle}>View Details</button>
          <button onClick={Handle} style={{backgroundColor:'black'}}>Delete Court </button>
        </div>
        
        </div>
    </div>
  )
}

export default AllPlayers