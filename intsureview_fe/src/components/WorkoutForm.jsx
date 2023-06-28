import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { navigate } from "@reach/router";

const WorkoutForm = (props) => {
  const [date, setDate] = useState();
  const [feeling, setFeeling] = useState(props.feeling);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="container">
      <form>
        {/* Date */}
        <div class="form-group">
          <label>Date:</label>
          <DatePicker
            closeOnScroll={true}
            selected={date}
            onChange={(d) => setDate(d)}
          />
        </div>

        {/* Workout Type */}
        <div class="form-group">
          <label for="workoutType">Type of Workout</label>
          <input
            type="workoutType"
            class="form-control"
            id="workoutType"
            placeholder="What did you do today?"
          />
        </div>

        {/* Location */}
        <div class="form-group">
          <label for="location">Location</label>
          <input
            type="location"
            class="form-control"
            id="location"
            placeholder="Location"
          />
        </div>

        {/* workout length */}
        <div class="form-group">
          <label for="location">Workout Length</label>
          <input
            type="workout_length"
            class="form-control"
            id="workout_length"
            placeholder="How long was your workout?"
          />
        </div>

        {/* Dropdown Menu - Select Input */}
        <div className="form-group">
          <label> Smashed it? </label>
          <select
            value={feeling}
            className="form-control"
            onChange={(e) => setFeeling(e.target.value)}
          >
            <option value="default">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" class="btn btn-primary">
          Log It
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
