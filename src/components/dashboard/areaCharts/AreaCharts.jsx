import TopGrounds from "../../TopGrounds";
import AreaBarChart from "./AreaBarChart";
import "../../maincomp.css";
import { useEffect, useState } from "react";
import axios from "axios";

const AreaCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getTopCourts';

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('feature courts', response.data.data);
        setData(response.data.data);
      } catch (err) {
        console.error(err.message); // Log error to console for debugging
      }
    };

    fetchData();
  }, []);

  // Function to format numbers into readable format with k and M
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    } else {
      return num.toFixed(2); // Ensure consistent decimal places
    }
  };

  return (
    <section className="content-area-charts">
      <AreaBarChart />
      <div>
        <h5 className='main-heading-buyer'>Top Grounds</h5>
        {data.map((item) => (
          <div key={item.courtOwnerId}>
            <TopGrounds
              totalSales={formatNumber(item.totalSales)}
              averageMonthlySales={formatNumber(item.averageMonthlySales)}
              groundName={item.name}
              processedOrders={formatNumber(item.processedOrders)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreaCharts;
