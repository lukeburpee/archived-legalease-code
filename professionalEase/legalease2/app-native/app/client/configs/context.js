import Meteor, { Accounts, ReactiveDict } from 'react-native-meteor';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import defaults from './defaults';

export default function ({reducers}) {
	const middlewares = [
		thunk
	];
	const Store = createStore(reducers,applyMiddleware(...middlewares));
	console.log(Store);
	return {
		Meteor,
		Accounts,
		Store
	}
}