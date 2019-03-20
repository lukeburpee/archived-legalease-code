import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { sources, subscriptions } from 'meteor/samy:redux-middlewares';
import { createResponsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as Collections from './../collections';
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';

export default function ({ reducers }) {

	const logger = createLogger();

	const middlewares = [
		thunk,
		logger,
		sources,
		subscriptions
	]

	const Store = createStore(
		reducers,
		createResponsiveStoreEnhancer({calculateStateInitially: true}),
		applyMiddleware(...middlewares)
	);

	return {
		Meteor,
		FlowRouter,
		Tracker,
		Store,
		Collections,
		dispatch: Store.dispatch,
		state: Store.getState()
	}

}