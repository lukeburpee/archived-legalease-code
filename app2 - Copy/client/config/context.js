import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const middlewares = [
	thunk,
	logger
];

export default function ({reducer}) {
	const Store = createStore(
		reducer,
		applyMiddleware(...middlewares)
	);
	return {
		Meteor,
		Tracker,
		Collections,
		FlowRouter,
		Store: Store,
		LocalState: new ReactiveDict(),
		dispatch: Store.dispatch
	}
}