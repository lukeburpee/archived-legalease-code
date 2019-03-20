import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';

import SearchIcon from 'material-ui/svg-icons/action/search';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import SaveIcon from 'material-ui/svg-icons/content/save';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import { red600 } from 'material-ui/styles/colors';
import Page from './../components/page';
import DocPage from './../components/docpage';
import Fab from './../components/fab';

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


storiesOf('Interface', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('side content open + meeting videos + bottomsheets', ()=> (
		<Page 
			left={true}
			right={true}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'72vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			leftBottomSheet={true}
			leftBottomSheetContent="left bottom sheet"
			rightTool="right tool"
			rightContent="right content"
			rightBottomSheet={true}
			rightBottomSheetContent="right bottom sheet"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('left closed + meeting videos', ()=> (
		<Page 
			left={false}
			right={true}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('right closed + meeting videos', ()=> (
		<Page 
			left={true}
			right={false}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('side content closed + meeting videos', ()=> (
		<Page 
			left={false}
			right={false}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('side content open no meeting videos', ()=> (
		<Page 
			left={true}
			right={true}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))
	.add('side content closed no meeting videos', ()=> (
		<Page 
			left={false}
			right={false}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))
	.add('side content open, no meeting videos, chatbox open', ()=> (
		<Page 
			left={true}
			right={true}
			fab={false}
			fabOpen={false}
			fabX={'60vw'}
			fabY={'73vh'}
			fabActions={{main:{closed:<SearchIcon color='white'/>, color:red600}}}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={true}
			chatBoxMin={false}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))
	.add('Doc Page, letter', ()=>(
		<DocPage size='letter' zoom={100} device={null}>doc page letter</DocPage>
	))
	.add('Doc Page, letter, landscape', ()=>(
		<DocPage size='letter' zoom={100} landscape device={null}>doc page letter</DocPage>
	))
	.add('Doc Page, legal', ()=>(
		<DocPage size='legal' zoom={100} device={null}>doc page legal</DocPage>
	))
	.add('Fab, open, 2 items, up', ()=>(
		<Fab open={true} direction={'up'} visible={true} locationX={'50vw'} locationY={'50vh'} actions={{main:{open:<ClearIcon/>,closed:<SearchIcon/>}, items:[{icon:<SaveIcon/>},{icon:<RefreshIcon/>}]}}/>
	))
	.add('Fab, open, 2 items, down', ()=>(
		<Fab open={true} direction={'down'} visible={true} locationX={'50vw'} locationY={'50vh'} actions={{main:{open:<ClearIcon/>,closed:<SearchIcon/>}, items:[{icon:<SaveIcon/>},{icon:<RefreshIcon/>}]}}/>
	))
	.add('Fab, open, 2 items, left', ()=>(
		<Fab open={true} direction={'left'} visible={true} locationX={'50vw'} locationY={'50vh'} actions={{main:{open:<ClearIcon/>,closed:<SearchIcon/>}, items:[{icon:<SaveIcon/>},{icon:<RefreshIcon/>}]}}/>
	))
	.add('Fab, open, 2 items, right', ()=>(
		<Fab open={true} direction={'right'} visible={true} locationX={'50vw'} locationY={'50vh'} actions={{main:{open:<ClearIcon/>,closed:<SearchIcon/>}, items:[{icon:<SaveIcon/>},{icon:<RefreshIcon/>}]}}/>
	))
	.add('Fab, closed, 2 items', ()=>(
		<Fab open={false} direction={'up'} visible={true} locationX={'50vw'} locationY={'50vh'} actions={{main:{open:<ClearIcon/>,closed:<SearchIcon/>}, items:[{icon:<SaveIcon/>},{icon:<RefreshIcon/>}]}}/>
	))


