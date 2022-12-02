import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';
import { JobTypeDetailReducer } from './Admin/reducer/JobTypeDetailReducer';
import { ListJobByNameReducer } from './User/reducer/ListJobByNameReducer';
import {ListMenuJobReducer} from './User/reducer/ListMenuJobReducer'


const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer,
    JobTypeDetailReducer,
    ListJobByNameReducer,
    ListMenuJobReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))