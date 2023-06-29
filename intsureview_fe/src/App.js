import React, { Component } from 'react';
import Header from './components/Header';
import UpdateWorkout from './components/UpdateWorkout';
import Main from './views/Main';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addWorkout" element={<AddWorkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
