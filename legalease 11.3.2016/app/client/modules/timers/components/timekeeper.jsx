import React from 'react';
import TimekeeperToolbar from './timekeepertoolbar.jsx';
import Timer from './timer.jsx';
import TimerList from './timerlist.jsx';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import { grey800 } from 'material-ui/styles/colors';

const TimeKeeper = ({}) => (
	<div style={{height:'calc(100vh - 64px)'}}>
		<TimekeeperToolbar/>
		<div style={{paddingLeft:40, paddingTop:10, overflowY:'scroll', height:'calc(100% - 64px)', backgroundColor:grey800}}>
			<TimerList timers={data}/>
		</div>
	</div>
);

export default TimeKeeper;

const data = [
	{
		id: '1',
		label: 'Timer 1',
		time: '3:00',
		active: true
	},{
		id: '2',
		label: 'Timer 2',
		time: '0:00',
		active: false
	},{
		id: '3',
		label: 'Timer 3',
		time: '0.00',
		active: false
	},{
		id: '4',
		label: 'Timer 1',
		time: '3:00',
		active: true
	},{
		id: '5',
		label: 'Timer 2',
		time: '0:00',
		active: false
	},{
		id: '6',
		label: 'Timer 3',
		time: '0.00',
		active: false
	}
]