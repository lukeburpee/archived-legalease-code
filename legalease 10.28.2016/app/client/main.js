import { createApp } from 'mantra-core';
import initContext from './../lib/config/context';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import coreModule from './modules/core';
import clientModule from './modules/clients';
import firmModule from './modules/firms';
import caseModule from './modules/cases';
import discoveryModule from './modules/discovery';
import courtsModule from './modules/courts';
import usersModule from './modules/users';
import fbModule from './modules/fb';
import searchModule from './modules/search';
import uploadModule from './modules/upload';
import viewerModule from './modules/viewer';

import formsModule from './modules/forms';


const coreReducers = coreModule.reducers;
const discoveryReducers = discoveryModule.reducers;
const fbReducers = fbModule.reducers;
const searchReducers = searchModule.reducers;
const viewerReducers = viewerModule.reducers;

const reducers = combineReducers({
	...coreReducers,
	...discoveryReducers,
	...fbReducers,
	...searchReducers,
	...viewerReducers,
	form: formReducer
});

const context = initContext({ reducers });

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(clientModule);
app.loadModule(firmModule);
app.loadModule(caseModule);
app.loadModule(discoveryModule);
app.loadModule(courtsModule);
app.loadModule(usersModule);
app.loadModule(formsModule);
app.loadModule(fbModule);
app.loadModule(searchModule);
app.loadModule(uploadModule);
app.loadModule(viewerModule);
app.init();