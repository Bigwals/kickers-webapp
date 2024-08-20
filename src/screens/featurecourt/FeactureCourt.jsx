import React, { useEffect, useState } from 'react';
import { AreaTop, Sidebar } from '../../components';
import FeaturedCourtComp from '../../components/FeaturedCourtComp/FeaturedCourtComp';
import axios from 'axios';
import { Skeleton, Box } from '@mui/material'; // Import Skeleton and Box from Material-UI

const FeactureCourt = () => {
  const [loading, setLoading] = useState(true); // Start loading as true
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getAllCourts';

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('feature court', response.data.message);
        setData(response.data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddFeatureCourt = async (item) => {
    const token = localStorage.getItem('accessToken');
    const apiUrl = `https://backend.kickers.mx/api/superadmin/featuredCourts/${item}`;

    try {
      setLoading(true);
      const response = await axios.post(
        apiUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('feature court', response.data);
      setData((prevData) =>
        prevData.map((court) =>
          court._id === item ? { ...court, featured: true } : court
        )
      );
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFeatureCourt = async (item) => {
    const token = localStorage.getItem('accessToken');
    const apiUrl = `https://backend.kickers.mx/api/superadmin/featuredCourts/${item}`;

    try {
      setLoading(true);
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('remove feature court', response.data);
      setData((prevData) =>
        prevData.map((court) =>
          court._id === item ? { ...court, featured: false } : court
        )
      );
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content-area" style={{ display: 'flex' }}>
        <div className="sidebar0div-resposnive">
          <Sidebar />
        </div>
        <div className="sidebar-dashbaord-view">
          <AreaTop topHeading="Feature Court " />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '15px',
              padding: '30px 8px',
            }}
            className="mainOuter"
          >
            {loading ? (
              // Show skeleton loader when loading
              Array.from(new Array(10)).map((_, index) => (
                <Box key={index} sx={{ width: '100%', height: 90, }}>
                  <Skeleton variant="rectangular" width="100%" height="100%" style={{borderRadius:10}} />
                </Box>
              ))
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              data?.map((item) => (
                <div style={{ width: '100%' }} key={item._id}>
                  <FeaturedCourtComp
                    HandleClick={() =>
                      item.featured
                        ? handleRemoveFeatureCourt(item._id)
                        : handleAddFeatureCourt(item._id)
                    }
                    textFeaturecourt={item.featured ? 'Remove Feature Court' : 'Add Feature Court'}
                    image={
                      item?.images[0] ||
                      'https://kickers.mx/static/media/logo.e72558eeb7dfd41364d2.jpeg'
                    }
                    name={item?.name}
                    openTiming={item.openingTime}
                    ClosedTiming={item?.closingTime}
                    Location={item?.address}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeactureCourt;
