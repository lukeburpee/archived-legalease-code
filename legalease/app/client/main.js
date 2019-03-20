import { createApp } from 'mantra-core';
import initContext from './config/context';
import {combineReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive';

// core modules
import coreModule from './modules/core';
import interfaceModule from './modules/interface';
import dashboardModule from './modules/dashboard';
import clientsModule from './modules/clients';
import mattersModule from './modules/matters';
// case modules
import caseModule from './modules/cases';
import researchModule from './modules/research';
import editorModule from './modules/editor';
// discovery modules
import discoveryModule from './modules/discovery';
import collectionsModule from './modules/collections';
import filesearchModule from './modules/filesearch';
import persistentlistsModule from './modules/persistentlists';
import viewerModule from './modules/viewer';
import formbuilderModule from './modules/formbuilder';
// utilities modules
import calendarModule from './modules/calendar';
import mailModule from './modules/mail';
import timersModule from './modules/timers';

const coreReducers = coreModule.reducers;
const interfaceReducers = interfaceModule.reducers;

const reducers = combineReducers({
	...coreReducers,
	...interfaceReducers,
	browser: responsiveStateReducer
});

const context = initContext({ reducers });

const app = createApp(context);
// core module
app.loadModule(coreModule);
app.loadModule(interfaceModule);
app.loadModule(dashboardModule);
app.loadModule(clientsModule);
app.loadModule(mattersModule);

// case modules
app.loadModule(caseModule);
app.loadModule(researchModule);
app.loadModule(editorModule);

// discovery modules
app.loadModule(discoveryModule);
app.loadModule(collectionsModule);
app.loadModule(filesearchModule);
app.loadModule(viewerModule);
app.loadModule(formbuilderModule);

// utilities modules
app.loadModule(calendarModule);
app.loadModule(mailModule);
app.loadModule(timersModule);
app.init();