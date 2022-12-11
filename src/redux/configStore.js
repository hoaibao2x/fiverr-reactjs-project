import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';
import { JobTypeDetailReducer } from './Admin/reducer/JobTypeDetailReducer';
import { QLNDreducer } from './Admin/reducer/QLNDReducer';
import { JobTypeReducer } from './Admin/reducer/JobTypeReducer';
import {ListMenuJobReducer} from './User/reducer/ListMenuJobReducer';
import { ManegeListJobReducer } from './User/reducer/ManegeListJobReducer';
import { UserReducer } from './User/reducer/UserReducer';


const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer,
    JobTypeDetailReducer,
    QLNDreducer,
    // ListJobByNameReducer,
    ManegeListJobReducer,
    ListMenuJobReducer,
    JobTypeReducer,
    UserReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))