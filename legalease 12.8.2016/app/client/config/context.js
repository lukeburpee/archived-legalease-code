import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';
import DiscoveryJobs from './jobs/collection'

import { Clients } from './../../lib/collections/clients';
import { Firms } from './../../lib/collections/firms';
import { Vendors } from './../../lib/collections/vendors';
import { Cases } from './../../lib/collections/cases';
import { Matters } from './../../lib/collections/matters';
import { Schedules } from './../../lib/collections/schedules';
import { Emails } from './../../lib/collections/emails';
import { Timers } from './../../lib/collections/timers';
import { Forms } from './../../lib/collections/forms';
import { Searches } from './../../lib/collections/searches';
import CaseFiles from './../../lib/collections/casefiles';
import DiscoveryFiles from './../../lib/collections/discoveryfiles';

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
		Roles,
		Clients,
		Firms,
		Vendors,
		Cases,
		Matters,
		Schedules,
		Emails,
		Timers,
		Forms,
		Searches,
		CaseFiles,
		DiscoveryFiles,
		DiscoveryJobs,
		dispatch: Store.dispatch
	}

}