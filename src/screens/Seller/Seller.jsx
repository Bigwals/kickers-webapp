// import React, { useEffect, useState } from 'react'
// import AllPlayerComp from '../../components/AllPlayers/AllPlayers'
// import Sidebar from "../../components/sidebar/Sidebar"
// import { MdWidthFull } from 'react-icons/md'
// import { AreaTop } from '../../components'
// import LogoDefulat from '../../assets/images/logo.jpeg'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const Seller = () => {
//   const [loading,setLoading] = useState('')
//   const [data ,setdata] = useState([]) 
//   const navigation = useNavigate()
//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//       const apiUrl = 'https://backend.kickers.mx/api/superadmin/getAllCourts'; // Replace with your API endpoint

//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log('court owners', response.data.message);
//         setdata(response.data.message)
//         // setData(response.data.message);
//       } catch (err) {
//         console.log(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   const HandleData = (item)=>{
//     navigation('/court-owner/CourtOrdersDetails', { state: {item: item}});
//   }
//   return (
//     <div className="content-area" style={{display:'flex'}}>
//     <div className="sidebar0div-resposnive" >
//          <Sidebar/>
//        </div>
//        <div className="sidebar-dashbaord-view">
      
//        <AreaTop topHeading="All Court Owners" />
       
//        {data?.map((item)=>(
//      <div key={item._id}>
//  <AllPlayerComp Handle={()=> HandleData(item)} image={item?.images[0] || LogoDefulat} name={item.name} openTiming={item.openingTime} ClosedTiming={item.closingTime} Location={item.address} />
//      </div>   
//        ))}
      
//        {/* <BuyerCom name='abc'Service='abc' date='21-10-2024' time='21:34' RequestID='23232424'/> */}
       
//        </div>
//        </div>
   
//   )
// }


// export default Seller


import React, { useEffect, useState } from 'react';
import AllPlayerComp from '../../components/AllPlayers/AllPlayers';
import Sidebar from '../../components/sidebar/Sidebar';
import { AreaTop } from '../../components';
import LogoDefulat from '../../assets/images/logo.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Box } from '@mui/material';

const Seller = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getAllCourts'; // Replace with your API endpoint

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('court owners', response.data.message);
        setData(response.data.message);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const HandleData = (item) => {
    navigation('/court-owner/CourtOrdersDetails', { state: { item: item } });
  };

  return (
    <div className="content-area" style={{ display: 'flex' }}>
      <div className="sidebar0div-resposnive">
        <Sidebar />
      </div>
      <div className="sidebar-dashbaord-view">
        <AreaTop topHeading="All Court Owners" />
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px',marginTop:5 ,width:'100%'}}>
          {Array.from(new Array(10)).map((_, index) => (
            <Box key={index} sx={{ width: '100%', height: 90,}}>
            <Skeleton variant="rectangular" width="100%" height="100%" style={{borderRadius:10}} />
          </Box>
          ))}
        </div>
        ) : (
          data?.map((item) => (
            <div key={item._id} style={{width:'100%'}}>
              <AllPlayerComp
                Handle={() => HandleData(item)}
                image={item?.images[0] || LogoDefulat}
                name={item.name}
                openTiming={item.openingTime}
                ClosedTiming={item.closingTime}
                Location={item.address}
              />
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default Seller;
