import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Hey there, together we rise.</h1>
          <p>Have you worked out today?</p>
        </div>

        <Link className="btn btn-outline-warning" to={`/addWorkout`}>
          Let's Rise!
        </Link>

        <br></br>
      </main>
    </div>
  );
}
