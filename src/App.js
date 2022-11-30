import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/LoadingComponent/Loading';
import { AdminTemplate } from './templates/Admin/AdminTemplate';
import ListUserPage from './pages/Admin/QL.User/ListUserPage/ListUserPage';
import Dashboard from './pages/Admin/Dashboard';
import ListJobPage from './pages/Admin/QL.Job/ListJobPage/ListJobPage';
import ListJobType from './pages/Admin/QL.JobType/JobType/ListJobType/ListJobType';
import ListDetail from './pages/Admin/QL.JobType/DetailJobType/ListDetail/ListDetail';
import RentJobList from './pages/Admin/QL.Service/RentJob/RentJobList/RentJobList';
import ListComment from './pages/Admin/QL.Service/Comment/ListComment/ListComment';
import { UserTemplate } from './templates/User/UserTemplate';
import Home from './pages/User/Home/Home';
import AddJobPage from './pages/Admin/QL.Job/AddJobPage/AddJobPage';
import UploadImageJob from './pages/Admin/QL.Job/UploadImageJob/UploadImageJob';
import EditJobPage from './pages/Admin/QL.Job/EditJobPage/EditJobPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import DanhSachUser from './pages/Admin/QL.User/ListUserPage/ListUserPage';
import ThemUser from './pages/Admin/QL.User/AddUserPage/AddUserPage';




export const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        {/* User Route */}
        <UserTemplate exact path='/home' component={Home}/>
       
        {/* Admin Route */}
        <AdminTemplate exact path='/admin' component={Dashboard} />
        <AdminTemplate exact path='/admin/list-job' component={ListJobPage} />
        <AdminTemplate exact path='/admin/list-job/add' component={AddJobPage} />
        <AdminTemplate exact path='/admin/list-job/add/upload-image' component={UploadImageJob} />
        <AdminTemplate exact path='/admin/list-job/edit-job/:id' component={EditJobPage} />
        <AdminTemplate exact path='/admin/list-job-type' component={ListJobType} />
        <AdminTemplate exact path='/admin/list-detail-job-type' component={ListDetail} />
        <AdminTemplate exact path='/admin/list-rent-job' component={RentJobList} />
        <AdminTemplate exact path='/admin/list-comment' component={ListComment} />
        
        <AdminTemplate exact path='/admin/list-user' component={DanhSachUser} />
        <AdminTemplate exact path='/admin/list-user/add' component={ThemUser} />



        {/* Default Route */}
        <UserTemplate exact path='/' component={Home}/>

        {/* Error Route */}
        <Route exact path='/error' component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;