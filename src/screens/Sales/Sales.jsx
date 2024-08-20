import React from 'react'
import SalesComp from "../../components/SalesComponents"
import Sidebar from "../../components/sidebar/Sidebar"
import './sales.css'
import { AreaTop } from '../../components'
import image from '../../assets/images/hoc.png'

const Sales = () => {
  return (
    
    // <div>
    //   <div style={{width:'20%'}}>
    //     <Sidebar/>
    //   </div>
        
    //     <div className='SalesRow'>
    //         <SalesComp/>
    //     <SalesComp/>
    //     <SalesComp/>
        
    //     </div>
    //     <div className='SalesRow'>
    //         <SalesComp/>
    //     <SalesComp/>
    //     <SalesComp/>
        
    //     </div>
    //     <div className='SalesRow'>
    //         <SalesComp/>
    //     <SalesComp/>
    //     <SalesComp/>
        
    //     </div>

    // </div>
    <div className="content-area" style={{display:'flex'}}>
    <div className="sidebar0div-resposnive" >
         <Sidebar/>
       </div>
       <div className="sidebar-dashbaord-view">
      
       <AreaTop topHeading="Sales " />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'end', alignItems: 'center', gap: '30px' , padding: '30px 8px'}} className='mainOuter'>
    {/* {applicationDataList.map((data, index) => (
           <div>
             <ApprovedCard documentButton="View Court Details" handleFunction={() => HandleOpen(data)} key={index} {...data} />
             
             <ViewDocument showBtn={true} btnText='Terminate Seller' ValtName={seletedData?.vatnumber}  Loaction={seletedData?.location} position={seletedData?.position} name={seletedData?.name} email={seletedData?.email}  show={modalShow}
               onHide={HandleClosed}/>
           </div>
 
 
         ))} */}
      {/* <div className='SalesRow'>
             <SalesComp/>
         <SalesComp/>
         <SalesComp/>
        
         </div> */}
        <div className='topside'>
          <button className='SalesButton'>View All</button>
        </div>
        
        
       </div>
       <div className='detitems' >
        <img src={image}alt="" srcset="" />
          
            <div >
             <h6>Service</h6>
              <p>Booking Ground One</p>
            </div>
            <div >
             <h6>Location</h6>
             <p>ESQ OCAMPO, CENTRO</p>
            </div>
            
        
        </div>
       </div>
       </div>
       
    

  )
}

export default Sales