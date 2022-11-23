import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LoadingReducer } from '../redux/LoadingReducer'

const rootReducer = combineReducers({
    LoadingReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))