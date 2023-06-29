import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout';
import Workouts from './components/Workouts';
import UpdateWorkout from './components/UpdateWorkout';
import WorkoutDetail from './components/WorkoutDetail';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/addWorkout" element={<AddWorkout />} />
          <Route path="/:id/" element={<WorkoutDetail />} />
          <Route path="/:id/update" element={<UpdateWorkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
