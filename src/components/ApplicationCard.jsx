import React from 'react'
import './maincomp.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import Popup from './Popup'
const ApplicationCard = ({ name, dateTime, location, documentButton, rejectbtn, acceptbtn, showbtn }) => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div className='main-Coponent-crd' >
      <div className="row">
        <div className="images">
          {/* <img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" srcset="" width='100%' height='100%' style={{borderRadius:'6px',objectFit:'cover'}}/> */}
        </div>
        <div style={{ paddingLeft: '15px' }}>
          <h4 className="headingText">{name}John Doe</h4>
          <p className="headingTextPara">{dateTime}16 may 2024 At 10.00AM</p>
        </div>
      </div>
      <p className="headingTextPara" style={{ paddingTop: '10px', fontWeight: 600 }}>
        <FaMapMarkerAlt style={{ fontSize: '13px', marginRight: '5px' }} />
        {location}
        B1, XYZ Mall Parking, Dubai , UAE
      </p>
      <div>
        <div className="button" style={{ width: '100%' }}>
          <button className="buttonText">{documentButton}View Documents</button>
          <Popup
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </div>
      </div>
      {showbtn && (
        <div className="button-secnd">
          <div className="button"><button className="buttonText">{rejectbtn}Reject</button></div>
          <div className="button" style={{ borderColor: '#408639', background: '#408639' }}><button onClick={() => setModalShow(true)} className="buttonText" style={{ color: 'white', fontWeight: 500 }}>{acceptbtn}Pending</button></div>

        </div>
      )}
    </div>
  )
}

export default ApplicationCard