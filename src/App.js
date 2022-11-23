import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/LoadingComponent/Loading';
import Footer from './components/User/FooterComponent/Footer';
import { AdminTemplate } from './templates/Admin/AdminTemplate';
import ListUserPage from './pages/Admin/QL.User/ListUserPage/ListUserPage';
import Dashboard from './pages/Admin/Dashboard';
import ListJobPage from './pages/Admin/QL.Job/ListJobPage/ListJobPage';
import ListJobType from './pages/Admin/QL.JobType/JobType/ListJobType/ListJobType';
import ListDetail from './pages/Admin/QL.JobType/DetailJobType/ListDetail/ListDetail';
import RentJobList from './pages/Admin/QL.Service/RentJob/RentJobList/RentJobList';
import ListComment from './pages/Admin/QL.Service/Comment/ListComment/ListComment';

export const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        {/* User Route */}
          <Footer/>
        {/* Admin Route */}
        <AdminTemplate exact path='/admin' component={Dashboard} />
        <AdminTemplate exact path='/admin/list-user' component={ListUserPage} />
        <AdminTemplate exact path='/admin/list-job' component={ListJobPage} />
        <AdminTemplate exact path='/admin/list-job-type' component={ListJobType} />
        <AdminTemplate exact path='/admin/list-detail-job-type' component={ListDetail} />
        <AdminTemplate exact path='/admin/list-rent-job' component={RentJobList} />
        <AdminTemplate exact path='/admin/list-comment' component={ListComment} />

        {/* Default Route */}
      </Switch>
    </Router>
  );
}

export default App;