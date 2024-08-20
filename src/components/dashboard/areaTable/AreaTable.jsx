import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import TopCusComp from "../../TopCostumer"
import { useEffect, useState } from "react";
import axios from "axios";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 100,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 80,
  },
];

const AreaTable = () => {
  const [data,setData] = useState([])
   useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      const apiUrl = 'https://backend.kickers.mx/api/superadmin/getTopCustomers';

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Stays courtsasd', response.data.data);
        setData(response.data.data);
      } catch (err) {
        console.error(err.message); // Log error to console for debugging
      }
    };

    fetchData();
  }, []);

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Top Customers</h4>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',gap:'18px'}}>
{data.map((item)=>(
  <div key={item._id} >
    <TopCusComp totalBookings={item.totalBookings} totalspent={item.totalSpents} name={item.name}  />
    </div>
))}
  </div>
      
    </section>
  );
};

export default AreaTable;
