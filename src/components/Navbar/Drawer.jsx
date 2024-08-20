// src/Drawer.js

import React from 'react';
import styled from 'styled-components';

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={toggleDrawer} />
      <DrawerContainer isOpen={isOpen}>
        <DrawerMenu style={{marginTop:'45px'}}>
          <DrawerLink href="/" style={{color:'white',fontSize:'14px'}} onClick={toggleDrawer}>Home</DrawerLink>
          <DrawerLink href="/about" style={{color:'white',fontSize:'14px'}} onClick={toggleDrawer}>About</DrawerLink>
          <DrawerLink href="/services" style={{color:'white',fontSize:'14px'}} onClick={toggleDrawer}>Services</DrawerLink>
          <DrawerLink href="/contact" style={{color:'white',fontSize:'14px'}} onClick={toggleDrawer}>Contact</DrawerLink>
        </DrawerMenu>
      </DrawerContainer>
    </>
  );
};

export default Drawer;

const Backdrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  max-width: 300px;
  background: #408639;
  color: white;
  display: flex;
  justify-content: start;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 20;
`;

const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DrawerLink = styled.a`
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
