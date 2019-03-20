import { createApp } from 'mantra-core';
import initContext from './config/context';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import coreModule from './modules/core';
import clientModule from './modules/clients';
import firmModule from './modules/firms';
import caseModule from './modules/cases';
import discoveryModule from './modules/discovery';
import filetreeModule from './modules/filetree';
import courtsModule from './modules/courts';
import usersModule from './modules/users';
import fbModule from './modules/fb';
import searchModule from './modules/search';
import processingModule from './modules/processing';
import viewerModule from './modules/viewer';

import formsModule from './modules/forms';


const coreReducers = coreModule.reducers;
const filetreeReducers = filetreeModule.reducers;
const discoveryReducers = discoveryModule.reducers;
const fbReducers = fbModule.reducers;
const searchReducers = searchModule.reducers;
const processingReducers = processingModule.reducers;
const viewerReducers = viewerModule.reducers;

const reducers = combineReducers({
	...coreReducers,
	...filetreeReducers,
	...discoveryReducers,
	...fbReducers,
	...searchReducers,
	...viewerReducers,
	...processingReducers,
	form: formReducer
});

const context = initContext({ reducers });

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(clientModule);
app.loadModule(firmModule);
app.loadModule(caseModule);
app.loadModule(filetreeReducers);
app.loadModule(discoveryModule);
app.loadModule(courtsModule);
app.loadModule(usersModule);
app.loadModule(formsModule);
app.loadModule(fbModule);
app.loadModule(searchModule);
app.loadModule(processingModule);
app.loadModule(viewerModule);
app.init();