import React, { useState } from "react";
// import axios from 'axios';
// import { navigate } from "@reach/router";

const WorkoutForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
  };

  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label for="workoutType">Type of Workout</label>
          <input
            type="workoutType"
            class="form-control"
            id="workoutType"
            placeholder="What did you do today?"
          />
          <small id="emailHelp" class="form-text text-muted">
            You got this!
          </small>
        </div>
        <div class="form-group">
          <label for="location">Location</label>
          <input
            type="location"
            class="form-control"
            id="location"
            placeholder="Location"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="completed" />
          <label class="form-check-label" for="workoutCompleted">
            Smashed It!
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Log It
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;