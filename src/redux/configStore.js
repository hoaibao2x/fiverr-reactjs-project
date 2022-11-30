import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'
import { JobReducer } from './Admin/reducer/JobReducer';
import { JobTypeDetailReducer } from './Admin/reducer/JobTypeDetailReducer';
import { QLNDreducer } from './Admin/reducer/QLNDReducer';
import { ListJobByNameReducer } from './User/reducer/ListJobByNameReducer';


const rootReducer = combineReducers({
    LoadingReducer,
    JobReducer,
    JobTypeDetailReducer,
    QLNDreducer,
    ListJobByNameReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))