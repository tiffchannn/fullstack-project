import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function UpdateWorkout() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [workoutLength, setWorkoutLength] = useState("");
  const [completed, setCompleted] = useState("");
  const [errorsObj, setErrorsObj] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const loadWorkouts = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    console.log("Data: ", data);
    console.log("🚀 ~ Update Workout Data:", data);

    // Allows us to access all of our previously saved form data
    setType(data.type);
    setDate(new Date(data.date)); // converts the date back to the acceptable date format
    setLocation(data.location);
    setWorkoutLength(data.workout_length);
    setCompleted(data.completed);
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const UpdateWorkoutInfo = async () => {
    let formField = new FormData();

    formField.append("type", type);
    formField.append("date", moment(date).format("yyyy-MM-DD"));
    formField.append("location", location);
    formField.append("completed", completed);
    formField.append("workout_length", workoutLength);

    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/${id}/`,
      data: formField,
    })
      .then((response) => {
        console.log("🚀 ~ Response Data: ", response.data);
        alert("Successfully updated workout!");
        navigate(`/${id}`);
      })
      .catch((err) => {
        const errorResponse = err.response.request.response;
        const errorResponseObject = JSON.parse(errorResponse);
        const errorsObjConverted = {};

        Object.keys(errorResponseObject).forEach((key) => {
          errorsObjConverted[key] = errorResponseObject[key].join(" ");
        });

        setErrorsObj(errorsObjConverted);
      });
  };

  return (
    <>
      <h1>Update Workout</h1>

      <div className="container">
        {/* Workout Type */}
        <div className="form-group">
          <label for="workoutType">Type of Workout</label>
          <p style={{ color: "red" }}> {errorsObj.type} </p>
          <input
            required
            type="text"
            className="form-control"
            placeholder="What did you do today?"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Date:</label>
          <p style={{ color: "red" }}> {errorsObj.date} </p>
          <DatePicker
            closeOnScroll={true}
            selected={date}
            dateFormat="yyyy-MM-dd"
            onChange={(d) => setDate(d)}
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label for="location">Location</label>
          <p style={{ color: "red" }}> {errorsObj.location} </p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Workout Length */}
        <div className="form-group">
          <label for="workoutLength">Workout Length</label>
          <p style={{ color: "red" }}> {errorsObj.workout_length} </p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Workout Length"
            name="workoutLength"
            value={workoutLength}
            onChange={(e) => setWorkoutLength(e.target.value)}
          />
        </div>

        {/* Dropdown Menu - Select Input */}
        <div className="form-group">
          <label> Smashed it? </label>
          <select
            value={completed}
            className="form-control"
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="default">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="btn btn-outline-primary" onClick={UpdateWorkoutInfo}>
          Update Workout!
        </button>
      </div>
    </>
  );
}
