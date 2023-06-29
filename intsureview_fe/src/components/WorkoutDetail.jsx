import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function WorkoutDetail() {
  const [workout, setWorkout] = useState("");
  const { id } = useParams();

  const getWorkout = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    console.log("🚀 ~ Workout Detail Data: ", data);
    setWorkout(data);
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <div>
      <h1>Detail Page</h1>
      <div className="workout-info">
        <h1>{workout.type}</h1>
        <p>{workout.date}</p>
        <p>{workout.location}</p>
        <p>{workout.workout_length}</p>

        <Link className="btn btn-primary mr-2" to={`/${workout.id}/update`}>
          Update
        </Link>
        <Link className="btn btn-danger mr-2" to={`/${workout.id}/delete`}>
          Delete
        </Link>
      </div>
    </div>
  );
}
