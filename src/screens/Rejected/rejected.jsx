import React from 'react'
import ApprovedCard from '../../components/ApprovedCard/ApprovedCard'
import Sidebar from "../../components/sidebar/Sidebar"
import ViewDocument from '../../components/ViewDocument/ViewDocument';
import { AreaTop } from '../../components';

const Rejected = () => {
  const applicationDataList = [
    {
      name: 'John Doe',
      dateTime: '16 May 2024 At 10:00 AM',
      location: 'B1, XYZ Mall Parking, Dubai, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    },
    {
      name: 'Jane Smith',
      dateTime: '18 May 2024 At 11:30 AM',
      location: 'C3, ABC Plaza, Abu Dhabi, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    },
    {
      name: 'Jane Smith',
      dateTime: '18 May 2024 At 11:30 AM',
      location: 'C3, ABC Plaza, Abu Dhabi, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    },
    {
      name: 'Jane Smith',
      dateTime: '18 May 2024 At 11:30 AM',
      location: 'C3, ABC Plaza, Abu Dhabi, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    },
    {
      name: 'Jane Smith',
      dateTime: '18 May 2024 At 11:30 AM',
      location: 'C3, ABC Plaza, Abu Dhabi, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    },
    {
      name: 'Jane Smith',
      dateTime: '18 May 2024 At 11:30 AM',
      location: 'C3, ABC Plaza, Abu Dhabi, UAE',
      img: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg'
    }
    // Add more application data objects here if needed
  ];
  const [modalShow, setModalShow] = React.useState(false)
  const [seletedData,setSelectedData] = React.useState(null)
  
  console.log(seletedData)
  const HandleOpen = (data)=>{
    setModalShow(true)
    setSelectedData(data)
    console.log('data-------',data)
  }
  const HandleClosed = ()=>{
    setModalShow(false)
    setSelectedData(null)
  }
  return (
    <>
       <div className="content-area" style={{display:'flex'}}>
   <div className="sidebar0div-resposnive" >
        <Sidebar/>
      </div>
      <div className="sidebar-dashbaord-view">
     
      <AreaTop topHeading="Rejected Court " />
   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', gap: '15px' , padding: '30px 8px'}} className='mainOuter'>
   {applicationDataList.map((data, index) => (
          <div>
            <ApprovedCard documentButton="View Court Details" handleFunction={() => HandleOpen(data)} key={index} {...data} />
            
            <ViewDocument showBtn={true} btnText='Terminate Seller' ValtName={seletedData?.vatnumber}  Loaction={seletedData?.location} position={seletedData?.position} name={seletedData?.name} email={seletedData?.email}  show={modalShow}
              onHide={HandleClosed}/>
          </div>


        ))}
      
      </div>
      </div>
      </div>
  
    </>
  )
}

export default Rejected