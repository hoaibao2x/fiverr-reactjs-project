import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/LoadingComponent/Loading';
import Footer from './components/User/FooterComponent/Footer';

export const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        {/* User Route */}
          <Footer/>
        {/* Admin Route */}

        {/* Default Route */}
      </Switch>
    </Router>
  );
}

export default App;