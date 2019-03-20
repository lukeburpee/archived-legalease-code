import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';

import Viewer from './../components/viewer';
import ViewerTabLabel from './../components/viewertablabel';
import ViewerTabs from './../components/viewertabs';
import AnnotationToolbar from './../components/annotationtoolbar';

const theme = getMuiTheme({
	themeName: 'legalEase Theme',
	palette: {
		primary1Color: '#283593',
		primary2Color: '#1A237E',
		accent1Color: '#FF5252',
		accent2Color: '#C5CAE9',
		accent3Color: '#455A64',
		textColor: 'black',
		alternativeTextColor: 'white',
	},
	zIndex: {
		floatingActionButton: 100
	}
});


storiesOf('Viewer', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Document Viewer, pdf view', ()=>(
		<Viewer view='pdf' documents={[{label:'document 1', pdf:'pdf 1', html:'html 1', text:'text 1', size:'letter', zoom:100, device:null},{label:'document 2', pdf:'pdf 2', html:'html 2', text:'text 2', size:'letter', zoom:100, device:null}]}/>
	))
	.add('Viewer Tabs',()=>(
		<ViewerTabs view='pdf' documents={[{label:'document 1', pdf:'pdf 1', html:'html 1', text:'text 1', size:'letter', zoom:100, device:null},{label:'document 2', pdf:'pdf 2', html:'html 2', text:'text 2', size:'letter', zoom:100, device:null}]}/>
	))
	.add('Annotation Toolbar', ()=>(
		<AnnotationToolbar view='pdf'/>
	))

