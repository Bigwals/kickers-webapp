import React from 'react';
import './Buyer.css';
import LogoDefulat from '../../assets/images/logo.jpeg'
const Buyer = ({ name, email, username, dob, foot, jerseyNo, position, date, avatar, location, RequestID, }) => {
  return (
    <div className='buyerRow'>
      <div className='display-flex-div'>
        <img 
          src={avatar||LogoDefulat} 
          alt="Buyer" 
          width='50px' 
          height='50px' 
          style={{ borderRadius: '6px', objectFit: 'cover' }}
        />
        <div className='text-container'>
          <p style={{ margin: '0', fontFamily:'"Manrope", sans-serif',fontWeight:800,whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{name}</p>
          <p style={{ margin: '0', color: 'gray',fontFamily:'"Manrope", sans-serif',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{email}</p>
        </div>
      </div>
      <div className='Buyer-sub-div'>
        <div className='twoCol'>
          <div className='detail-item'>
            <h6>Date</h6>
            <p>{date}</p>
          </div>
          <div className='detail-item'>
           <h6>Username</h6>
            <p>{username}</p>
          </div>
        </div> 
        <div className='twoCol'>
          <div className='detail-item'>
           <h6>Date of Birth</h6>
           <p>{dob}</p>
         </div>
         <div className='detail-item'>
            <h6>Foot</h6>
            <p>{foot}</p>
         </div>
        </div>
        <div className='twoCol'>
          <div className='detail-item'>
            <h6>Jersey No</h6>
            <p>{jerseyNo}</p>
          </div>
          <div className='detail-item'>
           <h6>Position</h6>
            <p>{position}</p>
          </div>
        </div>  
        <div className='detail-item'>
          <h6>Request ID</h6>
          <p>{RequestID}</p>
        </div>  
      </div>
    </div>
  );
};

export default Buyer;
