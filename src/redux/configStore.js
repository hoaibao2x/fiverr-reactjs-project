import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';
import { JobTypeDetailReducer } from './Admin/reducer/JobTypeDetailReducer';

const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer,
    JobTypeDetailReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))