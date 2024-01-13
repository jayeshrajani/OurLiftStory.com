import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProteinPage.css'; 

const ProteinPage = () => {
  const motionVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } },
  };

  return (
    <motion.div className='protein-importance-card' initial='initial' animate='animate'>
      <motion.div className="fuel-card-heading" variants={motionVariants} style={{ zIndex: 2 }}>
        <h3>Importance of Protein</h3>
      </motion.div>
      <motion.div className="fuel-card-content" variants={motionVariants} style={{ zIndex: 1 }}>
        <p>
          Understanding the importance of protein in muscle building and fat loss is crucial for individuals starting their fitness journey. Here are key points to highlight:
        </p>

        {/* Muscle Building Section */}
        <h4>Muscle Building:</h4>
        <ul>
          <li>Muscle Repair and Growth: Protein is essential for repairing and building muscle tissues.</li>
          <li>Protein Synthesis: Protein provides the necessary amino acids that contribute to protein synthesis.</li>
          <li>Satiety and Weight Control: Including protein in your meals helps promote a feeling of fullness and satiety.</li>
        </ul>

        {/* Fat Loss Section */}
        <h4>Fat Loss:</h4>
        <ul>
          <li>Metabolic Boost: Protein has a higher thermic effect compared to fats and carbohydrates.</li>
          <li>Preservation of Lean Muscle Mass: Adequate protein intake helps prevent the breakdown of muscle tissue for energy.</li>
          <li>Improved Body Composition: Higher protein intake, combined with regular exercise, can help improve body composition.</li>
        </ul>

        {/* General Considerations Section */}
        <h4>General Considerations:</h4>
        <ul>
          <li>Daily Protein Requirements: Beginners should aim for an adequate daily protein intake.</li>
          <li>Sources of Protein: Include a variety of protein sources in your diet.</li>
          <li>Timing Matters: Distributing protein intake evenly throughout the day can maximize its benefits.</li>
        </ul>

        <p>
          In summary, protein is a fundamental nutrient for those pursuing both muscle building and fat loss goals. It supports muscle repair, growth, and maintenance while providing a metabolic advantage for fat loss. Incorporating adequate protein into your diet can contribute significantly to achieving a balanced and effective fitness outcome.
        </p>
      </motion.div>
      <NavLink to="/fuel">
        <button className='explore'>Learn More</button>
      </NavLink>
    </motion.div>
  );
};

export default ProteinPage;
