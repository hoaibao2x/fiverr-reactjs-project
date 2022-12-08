import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';
import { JobTypeDetailReducer } from './Admin/reducer/JobTypeDetailReducer';
import { JobTypeReducer } from './Admin/reducer/JobTypeReducer';
import { InfoDetailJobReducer } from './User/reducer/InfoDetailJobReducer';
import {ListMenuJobReducer} from './User/reducer/ListMenuJobReducer';
import { ManegeListJobReducer } from './User/reducer/ManegeListJobReducer';


const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer,
    JobTypeDetailReducer,
    ManegeListJobReducer,
    ListMenuJobReducer,
    JobTypeReducer,
    InfoDetailJobReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))