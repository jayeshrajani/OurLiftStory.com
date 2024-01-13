import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MuscleFoodsPage.css'; 

const MuscleFoodsPage = () => {
  const motionVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } },
  };

  return (
    <motion.div className='muscle-foods-card' initial='initial' animate='animate'>
      <motion.div className="foods-card-heading" variants={motionVariants} style={{ zIndex: 2 }}>
        <h3>Foods for Muscle Building</h3>
      </motion.div>
      <motion.div className="foods-card-content" variants={motionVariants} style={{ zIndex: 1 }}>
        <p>
          Discovering the right foods is crucial for muscle building. Here are key foods to emphasize:
        </p>

        {/* Non-Vegetarian Protein Sources Section */}
        <h4>Non-Vegetarian Protein Sources:</h4>
        <ul>
          <li>Chicken Breast</li>
          <li>Salmon</li>
          <li>Eggs</li>
          <li>Greek Yogurt</li>
        </ul>

        {/* Vegetarian Protein Sources Section */}
        <h4>Vegetarian Protein Sources:</h4>
        <ul>
          <li>Lentils (Dal)</li>
          <li>Chickpeas (Chana)</li>
          <li>Tofu</li>
          <li>Paneer (Indian Cottage Cheese)</li>
        </ul>

        {/* Carbohydrate Sources Section */}
        <h4>Carbohydrate Sources:</h4>
        <ul>
          <li>Quinoa</li>
          <li>Sweet Potatoes</li>
          <li>Brown Rice</li>
          <li>Whole Grain Pasta</li>
          <li>Oats</li>
        </ul>

        {/* Healthy Fats Section */}
        <h4>Healthy Fats:</h4>
        <ul>
          <li>Avocado</li>
          <li>Nuts (Almonds, Walnuts)</li>
          <li>Olive Oil</li>
          <li>Fatty Fish (like Salmon)</li>
          <li>Flaxseeds</li>
        </ul>

        {/* Muscle-Building Snacks Section */}
        <h4>Muscle-Building Snacks:</h4>
        <ul>
          <li>Greek Yogurt with Berries</li>
          <li>Protein Smoothies</li>
          <li>Cottage Cheese with Pineapple</li>
          <li>Almond Butter on Whole Grain Toast</li>
          <li>Hard-Boiled Eggs</li>
        </ul>

        <p>
          Including these foods in your diet provides essential nutrients for muscle growth, repair, and overall health. Combine them strategically to support your fitness goals.
        </p>
      </motion.div>
      <NavLink to="/fuel">
        <button className='explore'>Learn More</button>
      </NavLink>
    </motion.div>
  );
};

export default MuscleFoodsPage;
