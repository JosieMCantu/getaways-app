import React from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import {PlaceDetailContainer} from '../../containers/PlaceDetailContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import Header from '../site/Header';
import Home from '../site/Home';
import Footer from '../site/Footer';
import './App.css';

export default function App() {
  return <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Getaways} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={RegisterContainer} />
      <Route exact path="/:id" component={PlaceDetailContainer} />
    </Switch>
    <Footer />
  </Router>
}
