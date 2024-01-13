import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import './Splits.css';

const Splits = () => {
  return (
    <div className='split-hero'>
      <div className="split-card">
        <div className="card-heading">
          <h3>Push Pull Legs</h3>
        </div>
        <div className="card-content">
          <p>The push-pull-legs (PPL) workout split is a versatile and efficient training approach. It divides exercises based on movement patterns: push for chest, shoulders, and triceps; pull for back and biceps; and legs for lower body strength. </p>
        </div>
        <NavLink to="/ppl"> {/* Use NavLink for navigation */}
          <button className='explore'>Explore</button>
        </NavLink>
      </div>
      <div className="split-card">
        <div className="card-heading">
          <h3>Bro Split</h3>
        </div>
        <div className="card-content">
          <p>The "bro split" is a popular bodybuilding training split that typically targets one muscle group per workout session. It's a straightforward approach, focusing on a different muscle group each day, allowing for intense training and adequate recovery.</p>
        </div>
        <NavLink to="/bro"> {/* Use NavLink for navigation */}
          <button className='explore'>Explore</button>
        </NavLink>
      </div>
      {/* Arnold Split Card */}
      <div className="split-card">
        <div className="card-heading">
          <h3>Arnold X PPL Split</h3>
        </div>
        <div className="card-content">
          <p>Arnold Schwarzenegger's legendary workout split. Customized for maximum gains and a sculpted physique.</p>
        </div>
        <NavLink to="/arnold"> {/* Use NavLink for navigation */}
          <button className='explore'>Explore</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Splits;
