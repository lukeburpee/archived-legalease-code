import { combineReducers } from 'redux';
import viewReducers from './layoutReducers';
import userReducers from './userReducers';
import pageReducers from './pageReducers';
import primaryReducers from './primaryViewReducers';
import leftSidebarReducers from './leftSidebarReducers';
import leftTroughReducers from './leftTroughReducers';
import rightSidebarReducers from './rightSidebarReducers';
import rightTroughReducers from './rightTroughReducers';
import fabReducers from './fabReducers';

export default {
	core: combineReducers({
		...viewReducers,
		...userReducers,
		...pageReducers,
		...primaryReducers,
		...leftSidebarReducers,
		...leftTroughReducers,
		...rightSidebarReducers,
		...rightTroughReducers,
		...fabReducers
	})
};