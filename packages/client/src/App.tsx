import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Candidates from './pages/Candidates';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/candidates'>
          <Candidates />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
