import React, { useEffect, useState } from 'react';
import BuyerCom from '../../components/newBuyer/BuyerComp';
import Sidebar from "../../components/sidebar/Sidebar";
import { AreaTop } from '../../components';
import axios from 'axios';
import { Skeleton, Box, Typography } from '@mui/material'; // Import Skeleton, Box, and Typography from Material-UI

const Buyer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getAllPlayers'; // Replace with your API endpoint

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('data approved', response.data?.data);
        setData(response.data.message)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-area" style={{ display: 'flex' }}>
      <div className="sidebar0div-resposnive">
        <Sidebar />
      </div>
      <div className="sidebar-dashbaord-view">
        <AreaTop topHeading="All Players" />
        <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '30px 8px',
            }}
            className="mainOuter"
          >
        {loading ? (
          // Show skeleton loader when loading
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px',marginTop:5 ,width:'100%'}}>
            {Array.from(new Array(10)).map((_, index) => (
              <Box key={index} sx={{ width: '100%', height: 90,}}>
              <Skeleton variant="rectangular" width="100%" height="100%" style={{borderRadius:10}} />
            </Box>
            ))}
          </div>
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          data?.map((item) => (
            <div key={item._id} style={{width:'100%'}}>
              <BuyerCom
                RequestID={item._id.slice(10)}
                position={item.position}
                date={item.dob}
                jerseyNo={item.jerseyNo}
                dob={item.dob}
                foot={item.foot}
                username={item.username}
                email={item.email}
                name={item.name}
                avatar={item.avatar}
              />
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default Buyer;
