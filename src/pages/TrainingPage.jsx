import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './TrainingPage.css';

const TrainingPage = () => {
  const trainingPageRightTopVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        className="training-page-right"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5}}
      >
        <motion.div
          className="training-page-right-top"
          variants={trainingPageRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.75, type: 'spring' }}
        >
          <h1>More than 1300 <span>exercises</span> that you can add to your workout!</h1>
          <NavLink to="/exercises">
            <button>Browse</button>
          </NavLink>
        </motion.div>

        <motion.div
          className="training-page-right-top 2"
          variants={trainingPageRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 1, type: 'spring' }}
        >
          <h1>Check out <span>training splits</span> specially customized for you!</h1>
          <NavLink to="/splits">
            <button>Browse</button>
          </NavLink>
        </motion.div>

        <motion.div
          className="training-page-right-top 3"
          variants={trainingPageRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 1.25, type: 'spring' }}
        >
          <h1>Learn about <span>nutrition</span> and its importance!</h1>
          <NavLink to="/fuel">
            <button>Browse</button>
          </NavLink>
        </motion.div>

        <motion.div
          className="training-page-right-top 3"
          variants={trainingPageRightTopVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 1.5, type: 'spring' }}
        >
          <h1>Learn about <span>more</span> types of trainings!</h1>
          <NavLink to="/training">
            <button>Browse</button>
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TrainingPage;
