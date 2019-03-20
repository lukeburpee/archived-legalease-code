import { configure } from '@kadira/storybook';

function loadStories(){
	require('./../client/modules/calendar/.stories/index.js');
	require('./../client/modules/cases/.stories/index.js');
	require('./../client/modules/chatbox/.stories/index.js');
	require('./../client/modules/clients/.stories/index.js');
	require('./../client/modules/collections/.stories/index.js');
	require('./../client/modules/dashboard/.stories/index.js');
	require('./../client/modules/discovery/.stories/index.js');
	require('./../client/modules/editor/.stories/index.js');
	require('./../client/modules/filesearch/.stories/index.js');
	require('./../client/modules/filesearchedit/.stories/index.js');
	require('./../client/modules/forgotpassword/.stories/index.js');
	require('./../client/modules/formbuilder/.stories/index.js');
	require('./../client/modules/formelements/.stories/index.js');
	require('./../client/modules/home/.stories/index.js');
	require('./../client/modules/interface/.stories/index.js');
	require('./../client/modules/login/.stories/index.js');
	require('./../client/modules/mail/.stories/index.js');
	require('./../client/modules/matters/.stories/index.js');
	require('./../client/modules/persistentlists/.stories/index.js');
	require('./../client/modules/profile/.stories/index.js');
	require('./../client/modules/querybuilder/.stories/index.js');
	require('./../client/modules/register/.stories/index.js');
	require('./../client/modules/reports/.stories/index.js');
	require('./../client/modules/research/.stories/index.js');
	require('./../client/modules/table/.stories/index.js');
	require('./../client/modules/timers/.stories/index.js');
	require('./../client/modules/users/.stories/index.js');
	require('./../client/modules/utilities/.stories/index.js');
	require('./../client/modules/viewer/.stories/index.js');
	require('./../client/modules/webrtc/.stories/index.js');
}

configure(loadStories, module);