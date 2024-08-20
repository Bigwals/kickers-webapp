import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import IMmage from '../../assets/images/no-data.png';
import './FieldsDetails.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FieldsDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
      const apiUrl = `https://backend.kickers.mx/api/superadmin/getFieldBookings?fieldId=${item._id}&date=${'8 aug 2024'}`; // Replace with your API endpoint

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('responsedatafeild', response.data.data);
        setData(response.data.data); // Set the fetched data
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchData();
  }, [item._id]);

  // Conditional rendering
  return (
    <div style={{ marginLeft: '15%', padding: '0px 45px', background: 'rgb(243 244 244)', height: '100vh' }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '20px 0px', background: '#f4f4f4' }}>
        <div className="whitebg">
          <h5>Details</h5>
          <div className='WhitebgCourt'>
            <div className='DetailItem' style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={item.images[0]} alt="" />
              <div>
                <h6>Name</h6>
                <p>{item.name}</p>
              </div>
            </div>
            <div className='DetailItem' style={{ display: 'block' }}>
              <h6>Turf Type</h6>
              <p>{item.turfType}</p>
            </div>
            <div className='DetailItem' style={{ display: 'block' }}>
              <h6>Session Duration</h6>
              <p>{item.sessionDuration}</p>
            </div>
            <div className='DetailItem' style={{ display: 'block' }}>
              <h6>Is Active</h6>
              <p>{item.isActive === true ? 'Court is active' : 'inactive'}</p>
            </div>
          </div>
        </div>

        <div className="whitebg">
          <div className='First-col'>
            <h1 className='headingText'>Job Bookings</h1>
          </div>
          <div className='WhitebgCourt3' style={{justifyContent:'center'}}>
            {loading ? (
              <p>Loading...</p> // Optionally show a loading state
            ) : data.length === 0 ? (
              <div className='no-data'>
                <img src={IMmage} alt="No Data" />
              
              </div>
            ) : (
              data.map((booking, index) => (
                <div className='detailsSecond' key={index}>
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
        </div>
      </div>
    </div>
  );
}

export default FieldsDetails;
