import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import Header from "../components/Header";
import WorkoutForm from "../components/WorkoutForm";

const Main = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center h-full pt-40 pb-96 lg:pb-20 px-10">
        <div className="lg:h-72 w-full">
          <h1 className="font-default italic m-0 text-6xl text-center">
            Hey there, together we rise.
          </h1>

          <p className="font-default text-lg text-center leading-6">
            Have you worked out today?
          </p>
        </div>

        {/* Let's go Button */}
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => navigate("/pirate/new")}
        >
          Let's Rise!
        </button>

        {/* Form */}
        <div className="flex flex-row mt-32 lg:mt-40">
          <div className="mx-24 w-64 text-center"></div>
          <WorkoutForm />
          <div className="mx-24 w-64 text-center"></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>

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
