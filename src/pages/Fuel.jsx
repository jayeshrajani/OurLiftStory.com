import React from 'react';
import { motion } from 'framer-motion';
import './Fuel.css';
import { NavLink } from 'react-router-dom';

const Fuel = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const topCardVariants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const bottomCardVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="fuel-hero">
      <motion.div 
        className="fuel-card" 
        variants={cardVariants} 
        initial="hidden" 
        animate="visible"
        whileHover={{ scale: 1.1 }}
      >
        <div className="card-heading">
          <h3>Eat Your Protein</h3>
        </div>
        <div className="card-content">
          <p>Protein: the silent partner in my muscle building process - turning every workout into a muscle-building masterpiece. It's like the behind-the-scenes hero that never asks for credit but deserves an Oscar for keeping my gains on point!</p>
        </div>
        <NavLink to="/protein">
          <button className='explore'>Explore</button>
        </NavLink>
      </motion.div>

      <motion.div 
        className="fuel-card" 
        variants={rightCardVariants} 
        initial="hidden" 
        animate="visible"
        whileHover={{ scale: 1.1 }}
      >
        <div className="card-heading">
          <h3>Foods for muscle building</h3>
        </div>
        <div className="card-content">
          <p>Finding the right balance among food groups transforms your plate into a powerhouse, fueling both your workouts and your body's daily needs.</p>
        </div>
        <NavLink to="/musclefoods">
          <button className='explore'>Explore</button>
        </NavLink>
      </motion.div>

      <motion.div 
        className="fuel-card" 
        variants={bottomCardVariants} 
        initial="hidden" 
        animate="visible"
        whileHover={{ scale: 1.1 }}
      >
        <div className="card-heading">
          <h3>Foods for fat loss?</h3>
        </div>
        <div className="card-content">
          <p>Achieving effective fat loss involves a strategic nutritional approach. Prioritize whole foods like lean proteins, vegetables, and complex carbohydrates, while moderating intake of processed and sugary items.</p>
        </div>
        <NavLink to="/fatlossfoods">
          <button className='explore'>Explore</button>
        </NavLink>
      </motion.div>

      <motion.div 
        className="fuel-card" 
        variants={topCardVariants} 
        initial="hidden" 
        animate="visible"
        whileHover={{ scale: 1.1 }}
      >
        <div className="card-heading">
          <h3>Want to get shredded?</h3>
        </div>
        <div className="card-content">
          <p>Embarking on the journey to get shredded requires a disciplined combination of intense workouts and precise nutrition. Opt for high-intensity training to torch calories and build lean muscle. Fuel your body with a well-balanced diet rich in protein, vegetables, and healthy fats to sculpt that chiseled physique.</p>
        </div>
        <NavLink to="/getshredded">
          <button className='explore'>Explore</button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Fuel;
