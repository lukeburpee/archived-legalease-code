import React from 'react';
import Paper from 'material-ui/Paper';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { indigo900, indigo800 } from 'material-ui/styles/colors';

let today = new Date();
let minDate = Number(new Date()) - (24*60*60*1000)*7;
const Calendar = ({events}) => (
	<Paper
		zDepth={2}
		rounded={false} 
		style={{
		width:579,
		height:344,
		position:'relative', 
		top:80,
		left:60,
		right: 'auto', 
		bottom:'auto'
	}}>
		<InfiniteCalendar
			theme={calendarStyle}
			width={580}
			height={346}
			selectedDate={today}
			disableDays={[0,6]}
			minDate={minDate}
			keyboardSupport={true}
		/>
	</Paper>
);

export default Calendar;

const calendarStyle = {
    textColor: {
        default: '#333',
        active: '#FFF'
    },
    selectionColor: '#559FFF',
    todayColor: '#FFA726',
    weekdayColor: indigo800,
    headerColor: indigo900,
    floatingNav: {
        background: 'rgba(56, 87, 138, 0.94)',
        color: '#FFF',
        chevron: '#FFA726'
    }
};