  import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Dropdown from 'react-bootstrap/Dropdown';
import Kickers from '../../assets/images/Kickers.png';
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import Logout from "./LogoutModal";
import './all.css';

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navigation =  useNavigate()
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // State to manage active link
  const [modallogout, setModallogout] = useState(false);

  const HandleOpen = () => {
    setModallogout(true);
  };

  const HandleClosed = () => {
    setModallogout(false);
  };
  const HandleLogout=()=>{
    localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.clear();
     
    navigation('/')
  }
  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeSidebar(); // Close sidebar on link click for better UX on mobile
  };

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={Kickers} alt="" style={{ width: '25px', objectFit: 'contain' }} />
          <span className="sidebar-brand-text">Kickers.</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/dashboard"
                className={`menu-link ${activeLink === "/dashboard" ? "active" : ""}`}
                onClick={() => handleLinkClick("/dashboard")}
              >
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/feature-court"
                className={`menu-link ${activeLink === "/feature-court" ? "active" : ""}`}
                onClick={() => handleLinkClick("/feature-court")}
              >
                <span className="menu-link-icon">
                  <MdOutlineFeaturedVideo  size={18} />
                </span>
                <span className="menu-link-text">Featured Court</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/Player"
                className={`menu-link ${activeLink === "/Player" ? "active" : ""}`}
                onClick={() => handleLinkClick("/Player")}
              >
                <span className="menu-link-icon">
                  <FaUsers  size={18} />
                </span>
                <span className="menu-link-text">All Player</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/court-owner"
                className={`menu-link ${activeLink === "/court-owner" ? "active" : ""}`}
                onClick={() => handleLinkClick("/court-owner")}
              >
                <span className="menu-link-icon">
                  <FaUsers  size={18} />
                </span>
                <span className="menu-link-text">All Court Owners</span>
              </Link>
            </li>
           
            <li className="menu-item">
              <Link
                to="/SendNotification"
                className={`menu-link ${activeLink === "/SendNotification" ? "active" : ""}`}
                onClick={() => handleLinkClick("/SendNotification")}
              >
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Send Notification</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/Sales"
                className={`menu-link ${activeLink === "/Sales" ? "active" : ""}`}
                onClick={() => handleLinkClick("/Sales")}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Sales</span>
              </Link>
            </li>
           
          </ul>
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
           
            <li className="menu-item">
              <Link
                className={`menu-link ${activeLink === "/logout" ? "active" : ""}`}
                onClick={HandleOpen}
              >
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
          <Logout logout={HandleLogout} show={modallogout} onHide={HandleClosed} />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
