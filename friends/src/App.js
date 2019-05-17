import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Auth route
import PrivateRoute from './PrivateRoute';
// components
import Login from './components/Login';
import Friends from './components/Friends';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/private">Friends </Link>
        </li>
        </ul>

        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/private" component={Friends}/>
      </div>
    </Router>
  );
}

export default App;
