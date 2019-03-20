import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';

import Collections from './../components/collections';
import LeftContent from './../components/collections.left.content';
import EncircledProgress from './../components/collections.encircledprogress';
import ProgressPanel from './../components/collections.progresspanel';
import ProgressPanelList from './../components/collections.progresspanellist';

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


storiesOf('Collections', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Collections', ()=>(
		<Collections/>
	))
	.add('Collection Folders', ()=>(
		<LeftContent collections={[
			{depth: 0, children: [1,2,3]},
			{depth: 1, children: [4,5], parentIndex: 0, disabled: false},
			{depth: 2, children: [6,7], parentIndex: 0, disabled: false},
			{depth: 3, children: [8,9], parentIndex: 0, disabled: false}
		]}/>
	))
	.add('Progress Panel List, All', ()=> (
		<ProgressPanelList panels={[
			{collection:'Collection 1', name:'Text Extracting', progress:'50', count:'100', isActive:true, isPaused:false},
			{collection:'Collection 2', name:'Meta Extracting', progress:'75', count:'60', isActive:false, isPaused:true},
			{collection:'Collection 3', name:'Pdf Imaging', progress:'40', count:'85', isActive:true, isPaused:false},
			{collection:'Collection 2', name:'Html Imaging', progress:'40', count:'85', isActive:true, isPaused:false},
			{collection:'Collection 1', name:'Pdf Imaging', progress:'40', count:'85', isActive:true, isPaused:false},
			{collection:'Collection 3', name:'Text Annotating', progress:'30', count:'60', isActive:false, isPaused:true}
		]}/>
	))
	.add('Progress Panel, Text Extraction active', ()=> (
		<ProgressPanel collection={"Collection 1"} name={"Text Extraction"} progress={47} count={20} isActive={true} isPaused={false}/>
	))
	.add('Encircled Progress, 60%, >10 files', ()=> (
		<EncircledProgress size={75} progress={60} count={5}/>
	))
	.add('Encircled Progress 60% >100 files', ()=> (
		<EncircledProgress size={75} progress={60} count={10}/>
	))
	.add('Encircled Progress 60% >1000 files', ()=> (
		<EncircledProgress size={75} progress={60} count={100}/>
	))
	.add('Encircled Progress 60% >1000 files', ()=> (
		<EncircledProgress size={75} progress={60} count={1000}/>
	))
	.add('Encircled Progress 60% >10000 files', ()=> (
		<EncircledProgress size={75} progress={60} count={10000}/>
	))


