
import { Button } from '@mui/material'
import React from 'react'
import '../../components/maincomp.css'
import AgentsCom from '../../components/AgentsComponents'
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar"
import './Agents.css'
import { AgentComponents } from '../../components/AgentComponents/AgentComponents';

const Agents = () => {
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
    <div style={{marginLeft:'15%'}}>
      <div >
        <Sidebar />
      </div>
      <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '40px', background: '#f4f4f4' }}>
        <div className="head">
          <div>
            <h1 className='headingText'>Agents</h1>
          </div>
          <div>
            <Button onClick={HandleOpen} id="buttonAll">Add Agents <IoIosArrowForward /></Button>
            <AgentComponents show={modalShow}
              onHide={HandleClosed}/>
          </div>
        </div>

        <div className="whitebg">

          <div style={{ marginTop: '20px' }}>
            <AgentsCom name='asdasd' Service='abc' date='21-10-2024' time='23:34' RequestID='1234567'/>
          </div>
          {/* <div style={{ marginTop: '20px' }}>
            <AgentsCom />
          </div>
          <div style={{ marginTop: '20px' }}>
            <AgentsCom />
          </div>
          <div style={{ marginTop: '20px' }}>
            <AgentsCom />
          </div>
          <div style={{ marginTop: '20px' }}>
            <AgentsCom />
          </div> */}
        </div>
      </div >
    </div>
  )
}

export default Agents