import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import Header from "../components/Header";
import WorkoutForm from "../components/WorkoutForm";

const Main = () => {
  return (
    <div>
      <Header />
      <WorkoutForm />
      <footer>
        <p>RISE UP PILATES</p>
        <p>
          <a href="hello@riseup.com">hello@riseup.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Main;
