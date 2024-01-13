import React from 'react'
import { motion } from 'framer-motion' 
import { NavLink } from 'react-router-dom'
import './PplSplit1.css'

const PplSplit1 = () => {
  return (
    <>
    <div className='pplsplit1-hero'>
      <motion.div 
        initial={{ x: '10vw',opacity:0 }}
        animate={{ x: 0 ,opacity:1}}
        transition={{ duration: 1, delay: 1 }}
        >
          <h2>Here's the OG Push Pull Legs split that you can try!</h2>
        </motion.div>

        <motion.div 
        initial={{ x: '-20vw',opacity:0 }}
        animate={{ x: 0 ,opacity:1}}
        transition={{ duration: 1, delay: 1.4 }}
        >
          <p className='pplsplit-data'>
  <h2>Day 1: Push</h2>
  <ul>
    <li>Barbell Bench Press: 4 sets x 8-12 reps</li>
    <li>Overhead Dumbbell Press: 4 sets x 10-12 reps</li>
    <li>Incline Chest Flyes: 3 sets x 12-15 reps</li>
    <li>Triceps Dips: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 2: Pull</h2>
  <ul>
    <li>Deadlifts: 4 sets x 6-8 reps</li>
    <li>Lat Pulldowns: 4 sets x 10-12 reps</li>
    <li>Barbell Rows: 4 sets x 8-10 reps</li>
    <li>Face Pulls: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 3: Legs</h2>
  <ul>
    <li>Back Squats: 4 sets x 8-12 reps</li>
    <li>Leg Press: 4 sets x 10-12 reps</li>
    <li>Lunges: 3 sets x 12-15 reps (each leg)</li>
    <li>Hamstring Curls: 3 sets x 12-15 reps</li>
    <li>Calf Raises: 4 sets x 12-15 reps</li>
  </ul>

  <h2>Day 4: Push</h2>
  <ul>
    <li>Standing Military Press: 4 sets x 8-12 reps</li>
    <li>Side Lateral Raises: 4 sets x 12-15 reps</li>
    <li>Front Plate Raises: 3 sets x 12-15 reps</li>
    <li>Triceps Pushdowns: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 5: Pull</h2>
  <ul>
    <li>Weighted Pull-Ups: 4 sets x 8-10 reps</li>
    <li>Barbell Rows (Underhand Grip): 4 sets x 10-12 reps</li>
    <li>Seated Cable Rows: 3 sets x 12-15 reps</li>
    <li>Barbell Curl: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 6: Legs</h2>
  <ul>
    <li>Front Squats: 4 sets x 8-12 reps</li>
    <li>Romanian Deadlifts: 4 sets x 10-12 reps</li>
    <li>Walking Lunges: 3 sets x 12-15 reps (each leg)</li>
    <li>Leg Extensions: 3 sets x 12-15 reps</li>
    <li>Seated Calf Raises: 4 sets x 12-15 reps</li>
  </ul>

  <h2>Day 7: Rest or Active Recovery</h2>

  </p>
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
  )
}

export default PplSplit1