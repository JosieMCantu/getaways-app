import React from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import {PlaceDetailContainer} from '../../containers/PlaceDetailContainer';
import './App.css';

export default function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={Getaways} />
      <Route exact path="/:id" component={PlaceDetailContainer} />
    </Switch>
  </Router>
}
