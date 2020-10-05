import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Employer from './pages/Employer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Talent from './pages/Talent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/how-it-works' component={HowItWorks} />
        <Route path='/about' component={About} />
        <Route path='/talent' component={Talent} />
        <Route path='/employer' component={Employer} />
      </Switch>
    </Router>
  );
}

export default App;
