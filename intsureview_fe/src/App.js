import React, { Component } from 'react';
import Header from './components/Header';
import WorkoutForm from './components/WorkoutForm';
import UpdateWorkout from './components/UpdateWorkout';
import Main from './views/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container m-10">
        <Switch>
          <Route exact path={["/", "/workouts"]} component={Main} />
          <Route exact path="/add/" component={WorkoutForm} />
          <Route path="/workout/:id/update/" component={UpdateWorkout} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
