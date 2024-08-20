
// import React, { useState } from 'react'
// import '../../components/maincomp.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { Button } from 'react-bootstrap';
// import Sidebar from "../../components/sidebar/Sidebar"
// import { AreaTop } from '../../components';

// const SendNotification = () => {
//   const [selectedItem, setSelectedItem] = useState('Select Recipients');

//   const handleSelect = (eventKey) => {
//     setSelectedItem(eventKey);
//   };

//   return (
//     <div className="content-area" style={{display:'flex'}}>
//     <div className="sidebar0div-resposnive" >
//          <Sidebar/>
//        </div>
//        <div className="sidebar-dashbaord-view">
      
//        <AreaTop topHeading="Send Notifications " />
//             <div  className='innerMain'>
//            <h4 className="headingText">Send To:</h4>
//            <DropdownButton
//        id="dropdown-basic-button"
//        title={selectedItem}
//        onSelect={handleSelect}
//     >
//       <Dropdown.Item eventKey="both player and code owner" id="action">both player and code owner</Dropdown.Item>
//       <Dropdown.Item eventKey="player" href="#/Another-action">player</Dropdown.Item>
//       <Dropdown.Item eventKey="code owner" href="#/Something else">code owner</Dropdown.Item>
//     </DropdownButton>

//     <h4 style={{ marginTop: '30px' }} className="headingText headingText2">Title:</h4>
//           <input placeholder='plz enter the title'  className='notifaction-title'  type='text' />
//           <h4 style={{ marginTop: '30px' }} className="headingText headingText2">Enter Message:</h4>
//           <textarea className='maininput' name="myInput"  rows="5" type='text' />

//         <div className='buttonNotification'>
//           <Button id='buttonAll'>Send Notification</Button>
//         </div>

//         </div>
//        </div>
//        </div>

//   )
// }

// export default SendNotification
import React, { useState } from 'react';
import '../../components/maincomp.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Sidebar from "../../components/sidebar/Sidebar";
import { AreaTop } from '../../components';
import axios from 'axios';

const SendNotification = () => {
  const [selectedItem, setSelectedItem] = useState('Select Recipients');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('accessToken');
    e.preventDefault();

    let apiUrl = 'https://backend.kickers.mx/api';
    if (selectedItem === 'both player and code owner') {
      apiUrl = 'https://backend.kickers.mx/api/superadmin/sendNotifToAllUser';
    } else if (selectedItem === 'player') {
      apiUrl = '/superadmin/sendNotifToPlayers';
    } else if (selectedItem === 'code owner') {
      apiUrl = '/superadmin/sendNotifToCodeOwners';
    }

    try {
      const response = await axios.post('https://backend.kickers.mx/api/superadmin/sendNotifToAllUser', {
        title,
        message
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="content-area" style={{ display: 'flex' }}>
      <div className="sidebar0div-resposnive">
        <Sidebar />
      </div>
      <div className="sidebar-dashbaord-view">
        <AreaTop topHeading="Send Notifications" />
        <div className='innerMain'>
          <h4 className="headingText">Send To:</h4>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="both player and code owner">both player and code owner</Dropdown.Item>
            <Dropdown.Item eventKey="player">player</Dropdown.Item>
            <Dropdown.Item eventKey="code owner">code owner</Dropdown.Item>
          </DropdownButton>

          <h4 style={{ marginTop: '30px' }} className="headingText headingText2">Title:</h4>
          <input
            placeholder='Please enter the title'
            className='notifaction-title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <h4 style={{ marginTop: '30px' }} className="headingText headingText2">Enter Message:</h4>
          <textarea
            className='maininput'
            name="myInput"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className='buttonNotification'>
            <Button id='buttonAll' onClick={handleSubmit}>Send Notification</Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SendNotification;
