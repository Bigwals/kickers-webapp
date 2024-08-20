import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageLogut from '../../assets/images/logouticon.png'
function Logout(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={props.onHide}  closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="main-div-logout">
        <img style={{width:'20%'}}  src={ImageLogut} />

        </div>
        <p style={{textAlign:'center',paddingTop:10}}>
        Are you sure you want to log out? 
        </p>
        <div className="btn-class">
          <div className="colm2">
            <button style={{background:'white',color:'#408639',border:'1px solid #408639',borderRadius:5}} onClick={props.onHide} className='btn-first-logout'>Cancel</button>
          </div>
          <div className="colm2">
          <button className='btn-first-logout' onClick={props.logout}> Logout</button>
          </div>
        </div>
      </Modal.Body>
      
    </Modal>
  );
}

export default Logout