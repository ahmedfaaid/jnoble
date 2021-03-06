import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Candidates from './pages/Candidates';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/candidates'>
          <Candidates />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
