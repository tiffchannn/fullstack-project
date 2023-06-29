import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const WorkoutForm = () => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [workoutLength, setWorkoutLength] = useState("");
  const [completed, setCompleted] = useState("");
  const [errorsObj, setErrorsObj] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const AddWorkoutInfo = async () => {
    let formField = new FormData();

    formField.append("type", type);
    formField.append("date", moment(date).format("yyyy-MM-DD"));
    formField.append("location", location);
    formField.append("completed", completed);
    formField.append("workout_length", workoutLength);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/",
      data: formField,
    })
      .then((response) => {
        console.log(response.data);
        alert("Successfully added workout!");
        navigate(`/${response.data.id}`);
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
      <button className="btn btn-success" onClick={AddWorkoutInfo}>
        Add Workout!
      </button>
    </div>
  );
};

export default WorkoutForm;
