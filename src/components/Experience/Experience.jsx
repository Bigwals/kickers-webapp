import React, { useContext } from "react";
// import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
 

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: 'var(--orange)'}}>8+</div>
        <span  style={{color:'black'}}>years </span>
        <span style={{color: "#408639"}}>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: 'var(--orange)'}}>20+</div>
        <span  style={{color: 'black'}}>completed </span>
        <span style={{color: "#408639"}}>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:'var(--orange)'}}>5+</div>
        <span  style={{color:'black'}}>companies </span>
        <span style={{color: "#408639"}}>Work</span>
      </div>
    </div>
  );
};

export default Experience;
