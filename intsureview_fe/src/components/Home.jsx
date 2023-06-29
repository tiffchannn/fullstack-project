import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:8000/api/workouts");
    setWorkouts(response.data);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <div>
        {workouts.map((workout, index) => (
          <div>
            <p key={index}>Type: {workout.type}</p>
            <p key={index}>Completed? {workout.completed}</p>
            <p key={index}>Date: {workout.date}</p>
            <p key={index}>Location: {workout.location}</p>
            <p key={index}>Workout Length: {workout.workout_length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
