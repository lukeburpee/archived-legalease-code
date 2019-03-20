import React from 'react';
import Timer from './timer.jsx';
import TimerList from './timerlist.jsx';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const TimeKeeper = ({}) => (
	<div style={{
		position:'relative', 
		top:80, 
		bottom:'auto'
	}}>
	<div style={{paddingLeft:50}}>
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
	}
]