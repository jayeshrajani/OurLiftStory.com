import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GetShredded.css';

const GetShredded = () => {
  const motionVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } },
  };

  return (
    <motion.div className='get-shredded-card' initial='initial' animate='animate'>
      <motion.div className="shredded-card-heading" variants={motionVariants} style={{ zIndex: 2 }}>
        <h3>Get Shredded: Steps to a Lean Physique</h3>
      </motion.div>
      <motion.div className="shredded-card-content" variants={motionVariants} style={{ zIndex: 1 }}>
        <p>
          Achieving a shredded physique requires a combination of nutrition, exercise, and lifestyle habits. Follow these steps to get shredded:
        </p>

        {/* Step 1: Calorie Deficit */}
        <h4>Step 1: Calorie Deficit</h4>
        <p>Consume fewer calories than your body expends to create a calorie deficit, promoting fat loss.</p>

        {/* Step 2: Balanced Nutrition */}
        <h4>Step 2: Balanced Nutrition</h4>
        <p>Eat a balanced diet with lean proteins, whole grains, healthy fats, and plenty of vegetables.</p>

        {/* Step 3: High-Intensity Workouts */}
        <h4>Step 3: High-Intensity Workouts</h4>
        <p>Include high-intensity interval training (HIIT) and strength training to boost metabolism and preserve muscle mass.</p>

        {/* Step 4: Consistency */}
        <h4>Step 4: Consistency</h4>
        <p>Consistency is key. Stick to your nutrition and workout plan to see gradual and sustainable results.</p>

        {/* Step 5: Hydration */}
        <h4>Step 5: Hydration</h4>
        <p>Stay hydrated for optimal metabolism and to support overall health during the shredding process.</p>

        <p>
          Incorporating these steps into your routine, along with patience and dedication, will help you achieve a shredded and defined physique.
        </p>
      </motion.div>
      <NavLink to="/fuel">
        <button className='explore'>Learn More</button>
      </NavLink>
    </motion.div>
  );
};

export default GetShredded;
