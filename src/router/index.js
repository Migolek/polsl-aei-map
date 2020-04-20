import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import HomeView from '../Views/HomeView';
import MapView from '../Views/MapView';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/map" component={MapView} />
    </Router>
  );
};


export default AppRouter;