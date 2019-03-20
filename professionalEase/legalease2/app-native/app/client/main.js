import { createApp } from 'mantra-core';
import initContext from './configs/context';
import { combineReducers } from 'redux';

import coreModule from './modules/core';
import interfaceModule from './modules/interface';
import discoveryModule from './modules/discovery';

const coreReducers = coreModule.reducers;
const interfaceReducers = interfaceModule.reducers;
const discoveryReducers = discoveryModule.reducers;
const reducers = combineReducers({
	...coreReducers,
	...interfaceReducers,
	...discoveryReducers
});

const context = initContext({ reducers });

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(interfaceModule);
app.loadModule(discoveryModule);
app.init();


