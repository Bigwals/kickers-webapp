// import React from 'react'
// import Modal from 'react-bootstrap/Modal';
// import ImageLogut from '../../assets/images/logouticon.png'

// const BookingPopup = (props) => {
//   return (
//     <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
//     <Modal.Header onClick={props.onHide}  closeButton>
//       <Modal.Title id="contained-modal-title-vcenter">
//         Logout
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <div className="main-div-logout">
//       <img style={{width:'20%'}}  src={ImageLogut} />

//       </div>
//       <p style={{textAlign:'center',paddingTop:10}}>
//       Are you sure you want to log out? 
//       </p>
//       <div className="btn-class">
//         <div className="colm2">
//           <button style={{background:'white',color:'#408639',border:'1px solid #408639',borderRadius:5}} onClick={props.onHide} className='btn-first-logout'>Cancel</button>
//         </div>
//         <div className="colm2">
//         <button className='btn-first-logout' onClick={props.logout}> Logout</button>
//         </div>
//       </div>
//     </Modal.Body>
    
//   </Modal>
//   )
// }

// export default BookingPopup

import React, { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FiDownload } from 'react-icons/fi';
import './Popup.css';

const BookingPopupComp = ({ email, show, onHide, popupData }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('popup-overlay')) {
        onHide();
      }
    };

    if (show) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show, onHide]);

  if (!show) return null;

  const documentUrl = popupData.document;

  return (
    <div className={`popup-overlay ${show ? 'active' : ''}`} onClick={onHide}>
      <div className={`popup-container ${show ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="popup-header" style={{ justifyContent: 'space-between', border: 'none' }}>
          <h2>Bookings</h2>
          <RxCross1 onClick={onHide} style={{ cursor: 'pointer' }} />
        </div>
        <div className="popup-body">
          <div className='popup-pending-appliction'>
            <div className='div-left-popup'>
              <h2>Details</h2>
              <div className='popup-inputfeild-application'>
                <p className='vat-number-api'>ID</p>
                <input className='valt-number-input-feild' placeholder='text' value={popupData.valNumber || ''} readOnly />
              </div>
              <div className='popup-inputfeild-application'>
                <p className='vat-number-api'>Status:</p>
                <input className='valt-number-input-feild' placeholder='text' value={popupData.location || ''} readOnly />
              </div>
              
              {/* <h2 className='margin-top-class'>Authorized Signatory</h2>
              <div className='second-row-customer customer-pending'>
                <div className='top-custorm-width' style={{ width: '80%' }}>
                  <h5 className='h5-class-top-class'>{popupData.name}</h5>
                  <p className='paragprh-customer-com'>{popupData.email}</p>
                </div>
                <div className='top-custorm-width' style={{ width: '20%', textAlign: 'start' }}>
                  <p className='paragprh-customer-com'>Position</p>
                  <h5 className='h5-class-top-class'>{popupData.Ceo}</h5>
                </div>
              </div> */}
            </div>
            <div className='div-left-popup extra-div-width'>
              <button>Delete</button>
              {/* <h2>Verification Document</h2>
              <a href={documentUrl} style={{ cursor: 'pointer', zIndex: 99 }} target="_blank" rel="noopener noreferrer" download="verification_document.pdf">
                <div className='div-verifecation-downlood' style={{ overflow: 'hidden' }}>
                  <FiDownload className='icon-downlood-da' />
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopupComp;
