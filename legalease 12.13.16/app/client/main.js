import { createApp } from 'mantra-core';
import initContext from './config/context';
import {combineReducers} from 'redux';

import coreModule from './modules/core';
import dashboardModule from './modules/dashboard';
import clientModule from './modules/clients';
import clientFormModule from './modules/clientform';
import firmModule from './modules/firms';
import caseModule from './modules/cases';
import matterFormModule from './modules/matterform';
import discoveryModule from './modules/discovery';
import filetreeModule from './modules/filetree';
import courtsModule from './modules/courts';
import usersModule from './modules/users';
import fbModule from './modules/fb';
import searchModule from './modules/search';
import processingModule from './modules/processing';
import viewerModule from './modules/viewer';
import mattersModule from './modules/matters';
import formsModule from './modules/forms';
import datatableModule from './modules/datatable'


const coreReducers = coreModule.reducers;
const clientFormReducers = clientFormModule.reducers;
const mattersReducers = mattersModule.reducers;
const matterFormReducers = matterFormModule.reducers;
const filetreeReducers = filetreeModule.reducers;
const discoveryReducers = discoveryModule.reducers;
const fbReducers = fbModule.reducers;
const searchReducers = searchModule.reducers;
const processingReducers = processingModule.reducers;
const viewerReducers = viewerModule.reducers;
const datatableReducers = datatableModule.reducers;

const reducers = combineReducers({
	...coreReducers,
	...clientFormReducers,
	...mattersReducers,
	...matterFormReducers,
	...filetreeReducers,
	...discoveryReducers,
	...fbReducers,
	...searchReducers,
	...viewerReducers,
	...processingReducers,
	...datatableReducers
});

const context = initContext({ reducers });

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(dashboardModule);
app.loadModule(clientModule);
app.loadModule(clientFormModule);
app.loadModule(firmModule);
app.loadModule(mattersModule);
app.loadModule(matterFormModule);
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
app.loadModule(datatableModule);
app.init();