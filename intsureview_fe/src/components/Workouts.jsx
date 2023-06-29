import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const { id } = useParams();

  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:8000/api");
    setWorkouts(response.data);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <>
      <h1>Workouts</h1>
      <div className="workouts-card-info">
        {workouts.map((workout, index) => (
          <Card
            className="m-2 rounded shadow-lg"
            style={{ width: "18rem" }}
            key={index}
          >
            <Card.Body>
              <Card.Title>{workout.type}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {workout.location}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {workout.date}
              </Card.Subtitle>
              <Card.Text>{workout.completed}</Card.Text>
              <Card.Text>{workout.workout_length}</Card.Text>

              <Link className="btn btn-warning mr-2" to={`/${workout.id}/`}>
                See Workout
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
