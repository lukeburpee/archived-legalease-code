import { combineReducers } from 'redux';

import login from './login';
import layout from './layout';
import user from './user';

export default {
	core: combineReducers({
		...login,
		...layout,
		...user
	})
}