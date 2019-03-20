import { createApp } from 'mantra-plus';
import { combineReducers } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initContext from './config/context';

injectTapEventPlugin();

import coreModule from './modules/core';
import clientsModule from './modules/clients';
import firmsModule from './modules/firms';
import casesModule from './modules/cases';

import { actions as privateActions, reducers as privateReducers } from './modules/private';

const privateModule = {
	privateActions,
	privateReducers
}

let coreReducers = coreModule.reducers

const reducer = combineReducers({
	...coreReducers,
	...privateReducers
});

const context = initContext({ reducer });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(clientsModule);
app.loadModule(firmsModule);
app.loadModule(casesModule);
app.loadModule(privateModule);
app.init()