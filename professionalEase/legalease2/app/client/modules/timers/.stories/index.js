import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';

import Timer from './../components/timekeeper.timer';
import Time from './../components/timekeeper.time';

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


storiesOf('Timer Keeper', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Time Keeper', ()=>(
		<Time isbreak={false} isplaying={true} time={25*60*1000} maxtime={25*60*1000}/>
	))
	.add('Time',()=>(
		<Timer time={25*60*1000} maxtime={25*60*1000}/>
	))

