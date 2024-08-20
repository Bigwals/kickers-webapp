import React, { useState } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer';
import Logo from '../../assets/images/logo.jpeg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const navigation =  useNavigate()
  return (
    <Nav className='addtion-navbar-properties' >
      <img onClick={()=>navigation('/')} src={Logo} alt="" style={{width:'5em',cursor:'pointer'}} />
      <Hamburger onClick={() => setIsDrawerOpen(!isDrawerOpen)} style={{background:'#408639',paddingRight:20}}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu >
    
                 <button className="button i-button" onClick={()=>navigation('/login')}><p style={{marginBottom:'0px'}}>Login</p></button>
      </Menu>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  color: white;
`;

// const Logo = styled.a`
//   padding: 1rem 0;
//   color: white;
//   text-decoration: none;
//   font-weight: 800;
//   font-size: 1.7rem;
//   text-transform: uppercase;
// `;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
    background:'black'
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: #3498db;
  }
`;

