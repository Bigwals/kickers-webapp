import { useEffect, useState } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";
import axios from "axios";

const AreaCards = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getAllCourtsStats';

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('status', response.data.data);
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
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        
        cardInfo={{
          title: "Total Orders",
          value:data.totalOrders,
          
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        
        cardInfo={{
          title: "Total Revenue",
          value: data.totalRevenue,
          
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        
        cardInfo={{
          title: "Average Sales",
          value: data.averageMonthlySales,
          
        }}
      />
    </section>
  );
};

export default AreaCards;
