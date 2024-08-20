import React, { useContext } from "react";
import "./Intro.css";
import a from "../../assets/images/a.png"
import b from "../../assets/images/b.png";
import player from "../../assets/images/player.png";
import ball from "../../assets/images/ball.png";
import t from "../../assets/images/t.png";
import crown from "../../assets/images/crown.png";
import FloatinDiv from "../../components/FloatingDiv/FloatingDiv";
import LI from "../../assets/images/LI.png";
import FB from "../../assets/images/FB.png";
import IG from "../../assets/images/IG.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro" style={{marginTop:'47px',position:'relative'}}>
      <div className="image-overlay">
        <img src={a} alt="" className="main-image-overlay" />
      </div>
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ display:'none'}}>Hy! I'm</span>
          <span><h3>Kickers A Ground booking App</h3></span>
          <span>
          <p>A booking application tailored for the football players in Mexico to manage ground, bookings online and also create matches and tournaments seamless, with a user-friendly interface</p>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button"><p style={{marginBottom:'0px'}}>Hire me</p></button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={LI} alt="" />
          <img src={FB} alt="" />
          <img src={IG} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={b} alt="" />
        <img src={a} alt="" />
        <img src={player} alt="" style={{width:'100%',objectFit:'cover',position:'absolute',top:0,left:0}}  />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={ball}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Kickers" text2="App" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={t} text1="Best Booking" text2="App" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
