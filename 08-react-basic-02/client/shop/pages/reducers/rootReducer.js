import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import test from './test/root';

const rootReducer = combineReducers({
	routing: routerReducer,
	...test,
});

export default rootReducer;