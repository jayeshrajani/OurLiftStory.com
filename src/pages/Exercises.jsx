import React, { useState, useEffect } from 'react';
import './Exercises.css';

const Exercises = () => {
  const [search, setsearch] = useState("deadlift");
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!search) return; // Avoid unnecessary API call with an empty search

      const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=6`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a356450808msh529d706566915c3p1bcd95jsn19ae124d97a2', 
          // 'X-RapidAPI-Key': 'a356450808msh529d706566915c3p1bcd95jsn19ae124d97a3', fake API
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result); // Log the entire result object for debugging

        setExerciseData(result); // Set the fetched data into state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      <div className="exercises-hero">
        <div className="exercises-top">
          <h2>Get tutorials for all exercises here!</h2>
          <div className="inputbar">
            <input
              type="text"
              placeholder="Search for your exercise:"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <button>Search</button>
          </div>
          <div className="exercises-data">
            {exerciseData.length > 0 ? (
              exerciseData.map((singleExercise, index) => (
                <div className="singleExercise-datacard" key={index}>
                  <p className='datacard-exercise-name'>Exercise: {singleExercise.name}</p>
                  <p className='datacard-exercise-bodypart'>Targets your {singleExercise.bodyPart}</p>
                  <p className='datacard-exercise-equipment'>Equipment required: {singleExercise.equipment}</p>
                  <img src={singleExercise.gifUrl} alt="" />
                </div>
              ))
            ) : (
              <p className='errorExdata'>No exercises found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercises;
