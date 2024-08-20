import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import BookingPopupComp from '../../components/BookingPopupComp/BookingPopupComp';
import ViewAllBookingComp from '../../components/ViewAllBookingComp/ViewAllBookingComp';
import './ViewAllBooking.css';

const ViewAllBookings = () => {
  const [modalShow, setModalShow] = useState(false);
  const [popupData, setPopupData] = useState({});

  // Function to show the popup and set the data
  const handleShowPopup = (data) => {
    setPopupData(data);
    setModalShow(true);
  };

  // Dummy data for example purposes
  const exampleData = {
    valNumber: '123456789',
    location: 'Dubai',
    name: 'John Doe',
    email: 'john.doe@example.com',
    Ceo: 'CEO',
    document: 'https://example.com/verification_document.pdf'
  };

  return (
    <div style={{ marginLeft: '15%' }}>
      <Sidebar />
      <h4 className='Heading'>View All Bookings</h4>
      {/* Pass the handler to ViewAllBookingComp */}
      <ViewAllBookingComp handleClick={() => handleShowPopup(exampleData)} />
      <ViewAllBookingComp handleClick={() => handleShowPopup(exampleData)} />
      <ViewAllBookingComp handleClick={() => handleShowPopup(exampleData)} />
      <BookingPopupComp
        show={modalShow}
        onHide={() => setModalShow(false)}
        popupData={popupData}
      />
    </div>
  );
};

export default ViewAllBookings;
