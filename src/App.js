import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
   
  </div>
);

export default App;
