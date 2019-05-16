import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <li><Link to="/login">Login</Link></li>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
