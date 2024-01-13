import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FatLossFoods.css';

const FatLossFoods = () => {
  const motionVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } },
  };

  return (
    <motion.div className='fat-loss-foods-card' initial='initial' animate='animate'>
      <motion.div className="foods-card-heading" variants={motionVariants} style={{ zIndex: 2 }}>
        <h3>Foods for Fat Loss</h3>
      </motion.div>
      <motion.div className="foods-card-content" variants={motionVariants} style={{ zIndex: 1 }}>
        <p>
          Discovering the right foods is crucial for fat loss. Here are key foods to emphasize:
        </p>

        {/* High-Volume, Low-Calorie Foods Section */}
        <h4>High-Volume, Low-Calorie Foods:</h4>
        <ul>
          <li>Leafy Greens (Spinach, Kale)</li>
          <li>Cucumbers</li>
          <li>Broccoli</li>
          <li>Celery</li>
          <li>Zucchini</li>
        </ul>

        {/* Lean Protein Sources Section */}
        <h4>Lean Protein Sources:</h4>
        <ul>
          <li>Chicken Breast</li>
          <li>Turkey</li>
          <li>Fish (Tuna, Salmon)</li>
          <li>Eggs</li>
          <li>Legumes (Lentils, Chickpeas)</li>
        </ul>

        {/* Whole Grains Section */}
        <h4>Whole Grains:</h4>
        <ul>
          <li>Quinoa</li>
          <li>Brown Rice</li>
          <li>Oats</li>
          <li>Barley</li>
          <li>Whole Wheat</li>
        </ul>

        {/* Healthy Fats Section */}
        <h4>Healthy Fats:</h4>
        <ul>
          <li>Avocado</li>
          <li>Nuts (Almonds, Walnuts)</li>
          <li>Olive Oil</li>
          <li>Fatty Fish (Salmon)</li>
          <li>Chia Seeds</li>
        </ul>

        {/* Water and Hydration Section */}
        <h4>Water and Hydration:</h4>
        <p>Staying hydrated is essential for supporting metabolism and promoting a feeling of fullness.</p>

        <p>
          Including these foods in your diet can contribute to a calorie deficit and aid in achieving fat loss goals. Remember to maintain a balanced and sustainable approach to your nutrition.
        </p>
      </motion.div>
      <NavLink to="/fuel">
        <button className='explore'>Learn More</button>
      </NavLink>
    </motion.div>
  );
};

export default FatLossFoods;
