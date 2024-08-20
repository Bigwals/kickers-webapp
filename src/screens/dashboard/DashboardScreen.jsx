import { AreaCards, AreaCharts, AreaTable, AreaTop, Sidebar } from "../../components";
import './dashoard.css'

const Dashboard = () => {
  const localStoragee = localStorage.getItem('accessToken')
  console.log(localStoragee)
  return (
    <div className="content-area" style={{display:'flex'}}>
      <div className="sidebar0div-resposnive" >
        <Sidebar/>
      </div>
      <div className="sidebar-dashbaord-view">
      <AreaTop topHeading="Dashboard " />
      <AreaCharts/>
      </div>
    </div>
  );
};

export default Dashboard;
