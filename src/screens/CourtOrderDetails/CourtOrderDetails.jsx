// import React, { useEffect, useState } from 'react';
// import Sidebar from "../../components/sidebar/Sidebar";
// // import './CourtOrdersDetails.css';
// import IMmage from '../../assets/images/no-data.png'; // Add this import for the no-data image
// import { IoIosArrowForward } from "react-icons/io";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './CourtOrdersDetials.css'
// const CourtOrderDetails = () => {
//   const location = useLocation();
//   const { item } = location.state || {};
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//       const apiUrl = `https://backend.kickers.mx/api/superadmin/getCourtBookings?courtId=${item._id}&date=${'8 aug 2024'}`; // Replace with your API endpoint

//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(response.data.data[0].bookings);
//         console.log('response.data.data',response.data.data)
//       } catch (err) {
//         console.log(err.message);
//       } finally {
//         setLoading(false); // Set loading to false after fetching data or on error
//       }
//     };

//     fetchData();
//   }, [item._id]);

//   return (
//     <div style={{ marginLeft: '15%' }}>
//       <Sidebar />
//       <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '40px', background: '#f4f4f4' }}>
//         <div className="head">
//           <div className='First-col'>
//             <h1 className='headingText'>{item.name}</h1>
//             <div className='buttonClass'>
//               <button id="buttonCourt">Edit <IoIosArrowForward /></button>
//               <button id="buttonCourt2">Remove Customer <IoIosArrowForward /></button>
//             </div>
//           </div>
//         </div>

//         <div className="whitebg">
//           <h5>Details</h5>
//           <div className='WhitebgCourt'>
//             <div className='Details'>
//               <h5 className='h5'>Court Name</h5>
//               <h5 className='h5'>{item.name}</h5>
//             </div>
//             <div className='Details'>
//               <h5 className='h5'>Location</h5>
//               <h5 className='h5'>{item.address}</h5>
//             </div>
//           </div>
//         </div>

//         <div className="whitebg">
//           <h5>Fields</h5>
//           <div className='WhitebgCourt'>
//             {item.fields.map((field, index) => (
//               <div className='detailsSecondfirst' key={index} onClick={() => navigate('/court-owner/CourtOrdersDetails/FieldsDetails', { state: { item: field } })}>
//                 <div className='secndDetails'>
//                   <img className='img' src={field.images[0]} alt="" />
//                   <div>
//                     <h5 className='h5'>Name: {field.name}</h5>
//                     <h5 className='h5'>Session: {field.sessionDuration}</h5>
//                   </div>
//                 </div>
//                 <div className='turf'>
//                   <h5 className="datah5" style={{ color: 'black' }}>{field.turfType}</h5>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="whitebg">
//           <div className='First-col'>
//             <h1 className='headingText'>Job Bookings</h1>
//             <div className='buttonClass'>
//               <button id="buttonCourt" onClick={() => navigate('/court-owner/CourtOrdersDetails/viewallbookings')}>View all <IoIosArrowForward /></button>
//             </div>
//           </div>
//           <div className='WhitebgCourt3' style={{justifyContent:'center'}}>
//             {loading ? (
//               <p>Loading...</p> // Optionally show a loading state
//             ) : data.length === 0 ? (
//               <div className='no-data' >
//                 <img src={IMmage} alt="No Data" />
               
//               </div>
//             ) : (
//               data.map((booking, index) => (
//                 <div className='detailsSecond' key={index}>
//                   <h5 className='h5'># {booking.id}</h5>
//                   <h5 className='h5'>{booking.date} At {booking.time}</h5>
//                   <div className='status'>
//                     <h5 className='h5'>Status</h5>
//                     <h5>{booking.status}</h5>
//                   </div>
//                   <div className='status'>
//                     <h5 className='h5'>Total Spend</h5>
//                     <h5>{booking.totalSpend} AED</h5>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourtOrderDetails;
import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import IMmage from '../../assets/images/no-data.png';
import { IoIosArrowForward, IoIosCalendar } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar'; // Calendar component
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './CourtOrdersDetials.css';

const CourtOrderDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to current date
  const [loading, setLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar display
  const [noBookings, setNoBookings] = useState(false); // State to check if any field has no bookings
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD'); // Format the selected date
      const apiUrl = `https://backend.kickers.mx/api/superadmin/getCourtBookings?courtId=${item._id}&date=${formattedDate}`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);

        // Check if any field has no bookings
        const hasBookings = response.data.data.some(fieldData => fieldData.bookings.length > 0);
        setNoBookings(!hasBookings);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate, item._id]); // Fetch data when selectedDate changes

  // Handler for date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Hide calendar after date selection
  };

  // Toggle calendar display
  const toggleCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div style={{ marginLeft: '15%' }}>
      <Sidebar />
      <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '40px', background: '#f4f4f4' }}>
        <div className="head">
          <div className='First-col'>
            <h1 className='headingText'>{item.name}</h1>
            <div className='buttonClass'>
              <button id="buttonCourt">Edit <IoIosArrowForward /></button>
              <button id="buttonCourt2">Remove Customer <IoIosArrowForward /></button>
            </div>
          </div>
        </div>

        <div className="whitebg">
          <h5>Details</h5>
          <div className='WhitebgCourt'>
            <div className='Details'>
              <h5 className='h5'>Court Name</h5>
              <h5 className='h5'>{item.name}</h5>
            </div>
            <div className='Details'>
              <h5 className='h5'>Location</h5>
              <h5 className='h5'>{item.address}</h5>
            </div>
          </div>
        </div>

        {/* <div className="whitebg">
          <h5>Select Date</h5>
          <div style={{ position: 'relative' }}>
            <button onClick={toggleCalendar} style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCalendar style={{ marginRight: '8px' }} />
              {moment(selectedDate).format('YYYY-MM-DD')}
            </button>
            {showCalendar && (
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                style={{ position: 'absolute', zIndex: 1 }}
              />
            )}
          </div>
        </div> */}

        <div className="whitebg">
          <h5>Fields</h5>
          <div className='WhitebgCourt'>
            {item.fields.map((field, index) => (
              <div className='detailsSecondfirst' key={index} onClick={() => navigate('/court-owner/CourtOrdersDetails/FieldsDetails', { state: { item: field } })}>
                <div className='secndDetails'>
                  <img className='img' src={field.images[0]} alt="" />
                  <div>
                    <h5 className='h5'>Name: {field.name}</h5>
                    <h5 className='h5'>Session: {field.sessionDuration}</h5>
                  </div>
                </div>
                <div className='turf'>
                  <h5 className="datah5" style={{ color: 'black' }}>{field.turfType}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whitebg">
          <div className='First-col'>
            <h1 className='headingText'>Job Bookings</h1>
            <div className='buttonClass'>
            <div style={{ position: 'relative' }}>
            <button onClick={toggleCalendar} style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCalendar style={{ marginRight: '8px' }} />
              {moment(selectedDate).format('YYYY-MM-DD')}
            </button>
            {showCalendar && (
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                style={{ position: 'absolute', zIndex: 1 }}
              />
            )}
          </div>
            </div>
          </div>
          <div className='WhitebgCourt3' style={{justifyContent:'center'}}>
            {loading ? (
              <p>Loading...</p> // Optionally show a loading state
            ) : noBookings ? (
              <div className='no-data'>
                <img src={IMmage} alt="No Data" />
               
              </div>
            ) : (
              data.map((fieldData, index) => (
                <div key={index}>
                  {fieldData.bookings.length === 0 ? (
                    // This will only display "No Data" image once, if no bookings are present
                    (index === 0) && (
                      <div className='no-data'>
                        <img src={IMmage} alt="No Data" />
                        <p>No bookings available</p>
                      </div>
                    )
                  ) : (
                    fieldData.bookings.map((booking, bIndex) => (
                      <div className='detailsSecond' key={bIndex}>
                        <h5 className='h5'># {booking.id}</h5>
                        <h5 className='h5'>{booking.date} At {booking.time}</h5>
                        <div className='status'>
                          <h5 className='h5'>Status</h5>
                          <h5>{booking.status}</h5>
                        </div>
                        <div className='status'>
                          <h5 className='h5'>Total Spend</h5>
                          <h5>{booking.totalSpend} AED</h5>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourtOrderDetails;
