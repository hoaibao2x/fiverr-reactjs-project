import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';

const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))