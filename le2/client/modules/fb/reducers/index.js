import { combineReducers } from 'redux';
import form from './form';
import records from './records';
import notifications from './notifications';
import dragndrop from './dragndrop';

export default {
	fb: combineReducers({
		form,
		records,
		notifications,
		dragndrop
	})
};
