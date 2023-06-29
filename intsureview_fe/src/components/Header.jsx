import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Rise Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <NavLink className="workouts-header" to="/">
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
