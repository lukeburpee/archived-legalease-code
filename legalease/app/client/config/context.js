import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';
import {responsiveStoreEnhancer} from 'redux-responsive';

import Clients from './../../lib/api/clients/collection';
import Firms from './../../lib/api/firms/collection';
import Vendors from './../../lib/api/vendors/collection';
import Cases from './../../lib/api/cases/collection';
import Matters from './../../lib/api/matters/collection';
import Schedules from './../../lib/api/schedules/collection';
import Emails from './../../lib/api/emails/collection';
import Timers from './../../lib/api/timers/collection';
import Forms from './../../lib/api/forms/collection';
import Searches from './../../lib/api/searches/collection';
import CaseFiles from './../../lib/api/casefiles/collection';
import DiscoveryFiles from './../../lib/api/discoveryfiles/collection';
import DiscoveryJobs from './../../lib/api/jobs/collection'

import * as constants from './constants';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';

export default function ({ reducers }) {

	const logger = createLogger();

	const middlewares = [
		thunk,
		logger
	]

	const Store = createStore(
		reducers,
		compose(
			responsiveStoreEnhancer,
			applyMiddleware(...middlewares)
		)
	);
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
		dispatch: Store.dispatch,
		constants
	}

}