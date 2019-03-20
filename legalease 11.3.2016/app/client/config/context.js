import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import {
  Clients,
  Firms,
  Vendors,
  Cases,
  Matters,
  Schedules,
  Emails,
  Timers,
  Chats,
  Families,
  Fields,
  Forms,
  Searches,
  CaseFiles,
  DiscoveryFiles
} from './../../lib/collections';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';

export default function ({ reducers }) {

	const logger = createLogger();

	const middlewares = [
		thunk,
		logger
	]

	const Store = createStore(reducers,applyMiddleware(...middlewares));
	console.log(Store.getState());
	return {
		Meteor,
		FlowRouter,
		Tracker,
		Store,
		Clients,
		Firms,
		Vendors,
		Cases,
		Matters,
		Schedules,
		Emails,
		Timers,
		Chats,
		Families,
		Fields,
		Forms,
		Searches,
		CaseFiles,
		DiscoveryFiles,
		dispatch: Store.dispatch
	}

}