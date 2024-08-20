import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import first from "../../assets/images/first.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{color:  "black" }}>Our Awesome</span>
        <span style={{color: "#408639"}}>services</span>
        <p>
        A booking application tailored for the football players 
          <br />
          in Mexico to manage ground
        </p>
        <a href="#">
          <button className="i-button">Visit Our App</button>
        </a>
        <div className="blur s-blur1" style={{ background: "" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={first}
            heading={"Book a Court "}
            detail={""}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={second}
            heading={"Create a Court"}
            detail={""}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={third}
            heading={"Join a Match"}
            detail={
              ""
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
