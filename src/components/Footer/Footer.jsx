import React from "react";
import "./Footer.css";
// import priv from "../pri/PrivPolicy"
import Wave from "../../assets/images/Wave.png";
import play from "../../assets/images/play.png";
import app from "../../assets/images/app.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      
        <div className="f-content">
          <div style={{}}>
          <span>Download Our App</span>
          <span>Links</span>
          </div>
         
          <div className="f-icons">
          <div style={{width:'25%'}}></div> 
         <div style={{width:'25%'}}><img src={play} alt="" /></div> 
           <div style={{width:'25%'}}><img src={app} alt="" /></div> 
          <div style={{width:'25%'}}>
          <h3><strong>Links</strong></h3>
          <ul>
         
           <li> <NavLink style={{textDecoration:'none',color:"black"}} to='/PrivacyPolicy'>Privacy Policy</NavLink></li>
           <li><NavLink style={{textDecoration:'none',color:'black'}} to='/Terms&Condition'>Terms & Conditions</NavLink></li>
          </ul> 

        </div>
      
          
            
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
