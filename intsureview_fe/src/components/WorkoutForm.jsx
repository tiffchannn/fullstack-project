import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// TODO
/*
  [] Validate one input
  [] Fix date format - not saving the selected date
  [] Navigate is redirecting to home page
*/

const WorkoutForm = (props) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [workoutLength, setWorkoutLength] = useState("");
  const [completed, setCompleted] = useState("");
  // const [errors, setErrors] = useState([]);

  const AddWorkoutInfo = async () => {
    let formField = new FormData();

    formField.append("type", type);
    formField.append("date", date);
    formField.append("location", location);
    formField.append("completed", completed);
    formField.append("workout_length", workoutLength);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div class="container">
      {/* Workout Type */}
      <div class="form-group">
        <label for="workoutType">Type of Workout</label>
        <input
          type="text"
          class="form-control"
          placeholder="What did you do today?"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      {/* Date */}
      {/* Need to fix date format */}
      <div class="form-group">
        <label>Date:</label>
        <DatePicker
          closeOnScroll={true}
          selected={date}
          dateFormat="yyyy-MM-dd"
          onChange={(d) => setDate(d)}
        />
        {/* <input
          type="text"
          class="form-control"
          placeholder="Use this format Year-Month-Day"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}
      </div>

      {/* Location */}
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* workout length */}
      <div class="form-group">
        <label for="location">Workout Length</label>
        <input
          type="text"
          class="form-control"
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

      {/* {errors.map( (err, index) => <h3 className="errors" key={index}> {err}</h3>)} */}
    </div>
  );
};

export default WorkoutForm;
