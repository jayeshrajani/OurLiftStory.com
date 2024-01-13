import React from 'react'
import './BroSplit1.css'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';


const BroSplit1 = () => {
  return (
    <>
    <div className='brosplit1-hero'>
      <motion.div 
        initial={{ x: '10vw',opacity:0 }}
        animate={{ x: 0 ,opacity:1}}
        transition={{ duration: 1, delay: 1 }}
        >
          <h2>Here's the OG bro split that you can try!</h2>
        </motion.div>
        <motion.div
          initial={{ x: '-20vw',opacity:0 }}
          animate={{ x: 0 ,opacity:1}}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <p className='brosplit-data'>
          <h2>Day 1: Chest</h2>
  <ul>
    <li>Bench Press: 4 sets x 8-12 reps</li>
    <li>Incline Dumbbell Press: 4 sets x 10-12 reps</li>
    <li>Chest Flyes: 3 sets x 12-15 reps</li>
    <li>Cable Crossover: 3 sets x 12-15 reps</li>
    <li>Triceps Dips: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 2: Back</h2>
  <ul>
    <li>Deadlifts: 4 sets x 6-8 reps</li>
    <li>Lat Pulldowns: 4 sets x 10-12 reps</li>
    <li>Barbell Rows: 4 sets x 8-10 reps</li>
    <li>Seated Cable Rows: 3 sets x 12-15 reps</li>
    <li>Face Pulls: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 3: Legs</h2>
  <ul>
    <li>Squats: 4 sets x 8-12 reps</li>
    <li>Leg Press: 4 sets x 10-12 reps</li>
    <li>Lunges: 3 sets x 12-15 reps (each leg)</li>
    <li>Leg Curls: 3 sets x 12-15 reps</li>
    <li>Calf Raises: 4 sets x 12-15 reps</li>
  </ul>

  <h2>Day 4: Shoulders</h2>
  <ul>
    <li>Overhead Press: 4 sets x 8-12 reps</li>
    <li>Lateral Raises: 4 sets x 12-15 reps</li>
    <li>Front Raises: 3 sets x 12-15 reps</li>
    <li>Shrugs: 3 sets x 12-15 reps</li>
    <li>Upright Rows: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 5: Arms</h2>
  <h3>Triceps:</h3>
  <ul>
    <li>Triceps Pushdowns: 4 sets x 12-15 reps</li>
    <li>Skull Crushers: 3 sets x 10-12 reps</li>
    <li>Overhead Triceps Extension: 3 sets x 12-15 reps</li>
  </ul>
  <h3>Biceps:</h3>
  <ul>
    <li>Barbell Curls: 4 sets x 10-12 reps</li>
    <li>Hammer Curls: 3 sets x 12-15 reps</li>
    <li>Preacher Curls: 3 sets x 12-15 reps</li>
  </ul>

  <h2>Day 6: Rest or Active Recovery</h2>
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

export default BroSplit1