import React from 'react'
import Switch from '@mui/material/Switch';
import { Button, FormControlLabel, FormGroup } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiOutlinePercentage } from "react-icons/ai";
import '../SendNotification/style.css'
import Checkbox from '@mui/material/Checkbox';
import Sidebar from "../../components/sidebar/Sidebar"



const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ServiceFee = () => {
  return (
    <div style={{background:'#f4f4f4',borderRadius:'25px' }}>
        <div style={{width:'20%'}}>
        <Sidebar/>
      </div>
      
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'white'}}>
        <div style={{width:'60%',marginLeft:'18%',marginTop:'20px'}}><h4>Service Fee</h4></div>
        <div style={{}}><h4>Spacfic Service Provider</h4></div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'white'}}>
        
        </div>
        <div><Switch {...label} /></div>
      </div> 
      <div style={{padding:'10px',marginLeft:'20%'}}>
      <div style={{marginTop:'20px',}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><p>Manage Service Fee for all service providers or specific one</p>  
          <h5>Service Providers: All</h5>
          </div>         
          <div>
            <Button>Select Service Providers</Button>
            </div>
        </div>
      </div> 
      <h4 style={{marginTop:'20px'}}>Select Fee Type</h4>
          <DropdownButton id="dropdown-basic-button" title="Select Recipients" style={{width:'100%'}}>
            <Dropdown.Item style={{width:'100%'}} href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item style={{width:'100%'}} href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item style={{width:'100%'}} href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div Classname='inputDiv' style={{marginTop:'40px',width:'50%'}}>
        
        <h4>kickers Fees</h4>
         <div style={{position:'relative'}}>
 <input style={{border:'none',borderBottom:'1px solid',background:'#f4f4f4',width:'90%',marginTop:'25px'}} name="myInput" />
        <AiOutlinePercentage style={{color:'black',fontSize:'20px',position:'absolute',bottom: '3px',
    left: '86%'}} />
         </div>
       
        
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Apply per Service" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Apply per Invoice" />
  </FormGroup>
     </div>
    
      
       
      
      
      <div style={{width:'50%',marginTop:'10px'}}>
      <h4 >Is Amount Taxable?</h4>
      <DropdownButton id="dropdown-basic-button" title="yes" style={{width:'100%'}}>
            <Dropdown.Item style={{width:'100%'}} href="#/action-1">Yes</Dropdown.Item>
            <Dropdown.Item style={{width:'100%'}} href="#/action-2">No</Dropdown.Item>
            
          </DropdownButton>

          <p >5% VAT (As per the Government Rules*) </p>
      </div>
      </div>    
      <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'90%'}}>
        <div>
          <h4>Status (Applicable / Non-Applicable)</h4>
        </div>
        <div>
           <div><Switch {...label} /></div>
        </div>
      </div>
      </div>
    </div>
    
    
  )
}

export default ServiceFee
