import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './ArnoldSplit1.css';

const ArnoldSplit1 = () => {
  return (
    <>
      <div className='arnoldx-brosplit-hero'>
        <motion.div
          initial={{ x: '10vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>Arnold's Bro Split for Ultimate Gains!</h2>
        </motion.div>

        <motion.div
          initial={{ x: '-20vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className='arnoldx-brosplit-data'>
          <h2>Monday: Push</h2>
      <ul>
        <li>Barbell Bench Press: 4 sets x 8-12 reps</li>
        <li>Overhead Dumbbell Press: 4 sets x 10-12 reps</li>
        <li>Incline Chest Flyes: 3 sets x 12-15 reps</li>
        <li>Triceps Dips: 3 sets x 12-15 reps</li>
      </ul>

      <h2>Tuesday: Pull</h2>
      <ul>
        <li>Deadlifts: 4 sets x 6-8 reps</li>
        <li>Lat Pulldowns: 4 sets x 10-12 reps</li>
        <li>Barbell Rows: 4 sets x 8-10 reps</li>
        <li>Face Pulls: 3 sets x 12-15 reps</li>
      </ul>

      <h2>Wednesday: Legs</h2>
      <ul>
        <li>Back Squats: 4 sets x 8-12 reps</li>
        <li>Leg Press: 4 sets x 10-12 reps</li>
        <li>Lunges: 3 sets x 12-15 reps (each leg)</li>
        <li>Hamstring Curls: 3 sets x 12-15 reps</li>
        <li>Calf Raises: 4 sets x 12-15 reps</li>
      </ul>

      <h2>Thursday: Chest/Back</h2>
      <ul>
        <li>Barbell Bench Press: 4 sets x 8-12 reps</li>
        <li>Incline Dumbbell Press: 4 sets x 10-12 reps</li>
        <li>Lat Pulldowns: 4 sets x 10-12 reps</li>
        <li>Barbell Rows: 4 sets x 8-10 reps</li>
      </ul>

      <h2>Friday: Shoulders/Arms</h2>
      <h3>Shoulders:</h3>
      <ul>
        <li>Overhead Press: 4 sets x 8-12 reps</li>
        <li>Lateral Raises: 4 sets x 12-15 reps</li>
        <li>Front Raises: 3 sets x 12-15 reps</li>
        <li>Shrugs: 3 sets x 12-15 reps</li>
        <li>Upright Rows: 3 sets x 12-15 reps</li>
      </ul>

      <h3>Arms:</h3>
      <h4>Triceps:</h4>
      <ul>
        <li>Triceps Pushdowns: 4 sets x 12-15 reps</li>
        <li>Skull Crushers: 3 sets x 10-12 reps</li>
        <li>Overhead Triceps Extension: 3 sets x 12-15 reps</li>
      </ul>

      <h4>Biceps:</h4>
      <ul>
        <li>Barbell Curls: 4 sets x 10-12 reps</li>
        <li>Hammer Curls: 3 sets x 12-15 reps</li>
        <li>Preacher Curls: 3 sets x 12-15 reps</li>
      </ul>

      <h2>Saturday: Legs</h2>
      <ul>
        <li>Front Squats: 4 sets x 8-12 reps</li>
        <li>Romanian Deadlifts: 4 sets x 10-12 reps</li>
        <li>Walking Lunges: 3 sets x 12-15 reps (each leg)</li>
        <li>Leg Extensions: 3 sets x 12-15 reps</li>
        <li>Seated Calf Raises: 4 sets x 12-15 reps</li>
      </ul>

      <h2>Sunday: Off</h2>

           
          </div>
        </motion.div>
        <div className="moreSplits">
          <NavLink to="/splits">
            <button>
              Explore other splits!
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ArnoldSplit1;
