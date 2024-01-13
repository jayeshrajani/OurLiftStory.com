import React, { useState } from 'react';
import logo from '../assets/logo.png';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [trainingMenu, setTrainingMenu] = useState(false);

  
  return (
    <motion.div
      className="nav"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="logo">
        <img src={logo} alt="" />
        <h5>OurLiftStory.com</h5>
      </div>
      <div className={menu ? 'openMenu' : 'nav-menu'}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => {
                if (window.innerWidth <= 767) {
                  
                  setMenu(!menu);
                }
              }}>
              Hub
            </NavLink>
          </li>
          <div className='training-li'>
          <li >
            <NavLink to="/trainingPage"onClick={() => {
                if (window.innerWidth <= 767) {
                  
                  setMenu(!menu);
                }
              }}>
              <p>Training</p>
            </NavLink>
          </li>
          
          
          </div>
          <li>
            <NavLink to="/fuel" onClick={() => {
                if (window.innerWidth <= 767) {
                  
                  setMenu(!menu);
                }
              }}>
              Fuel
            </NavLink>
          </li>
          <li>
            <NavLink to="/mindset" onClick={() => {
                if (window.innerWidth <= 767) {
                  
                  setMenu(!menu);
                }
              }}>
              Mindset
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/story"
              onClick={() => {
                if (window.innerWidth <= 767) {
                  
                  setMenu(!menu);
                }
              }}
            >
              Our Story
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div className={menu ? 'ham open' : 'ham'}></div>
      </div>

        <div className={trainingMenu? "training-drop-menu":"training-drop-menu-default"} >
          <ul>
            <li>
             <NavLink to="/exercises">
              Exercise list
            </NavLink>
            </li>
            <li><NavLink to="/trainingPage">
              Types of training
            </NavLink></li>
            <li>Potato</li>
          </ul>
          
        </div>

    </motion.div>
  );
};

export default Navbar;
