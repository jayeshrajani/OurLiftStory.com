import React from 'react';
import spartan from '../assets/spartan.png';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const colorChangeAnimation = {
    black: '#E8171E',
    white: '#ffffff',
  };

  const homeRightTopVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="home">
      <motion.div
        className="home-left"
        initial={{ x: -490 }}
        animate={{ x: 0 }}
        transition={{ duration: 4, type: 'spring', stiffness: 200, delay: 1 }}
      >
        <motion.h3
          animate={{
            color: [colorChangeAnimation.black, colorChangeAnimation.white, colorChangeAnimation.black],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: 'linear' }}
        >
          LIFT
        </motion.h3>
        <motion.h3
          className="stroke-text"
          animate={{
            color: [colorChangeAnimation.black, colorChangeAnimation.white, colorChangeAnimation.black],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: 'linear' }}
        >
          EAT
        </motion.h3>
        <motion.h3
          animate={{
            color: [colorChangeAnimation.black, colorChangeAnimation.white, colorChangeAnimation.black],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: 'linear' }}
        >
          REPEAT
        </motion.h3>
      </motion.div>
      
      <motion.img
        src={spartan}
        alt=""
        className="spartan"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />  
      
      <motion.div
        className="home-right"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="home-right-top"
          variants={homeRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 2, type: 'spring' }}
        >
          <h1>More than 1300 <span>exercises</span> that you can add to your workout!</h1>
          <NavLink to="/exercises">
            <button>Browse</button>
          </NavLink>
        </motion.div>

        <motion.div
          className="home-right-top 2"
          variants={homeRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 2.5, type: 'spring' }}
        >
          <h1>Check out <span>training splits</span> specially customized for you!</h1>
          <NavLink to="/splits">
            <button>Browse</button>
            </NavLink>
        </motion.div>

        <motion.div
          className="home-right-top 3"
          variants={homeRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 3, type: 'spring' }}
        >
          <h1>Learn about <span>nutrition</span> and its importance!</h1>
          <NavLink to="/fuel">
            <button>Browse</button>
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
