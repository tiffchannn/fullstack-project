import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <NavLink className="header-title" to="/">
          Rise Up
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <NavLink className="workouts-header" to="/workouts">
            Workouts
          </NavLink>
          <NavLink className="add-workout-header" to="/addWorkout">
            Add Workout
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
