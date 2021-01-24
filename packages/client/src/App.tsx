import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Candidates from './pages/Candidates';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/candidates'>
          <Candidates />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
