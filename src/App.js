import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/LoadingComponent/Loading';

export const history = createBrowserHistory();


function App() {
  return (
    <Router histpry={history}>
      <Loading />

      <Switch>
        {/* User Route */}

        {/* Admin Route */}

        {/* Default Route */}
      </Switch>
    </Router>
  );
}

export default App;