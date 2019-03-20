import React, { Component, PropTypes } from 'react';

import Timer from './timer.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class TimerList extends Component {
	constructor(props){
		super(props);
	}
	renderTimers(){
		return this.props.timers.map((timer, i) => (
			<Timer
				key={i}
				label={timer.label}
				time={timer.time}
				active={timer.active}
			/>
		));
	}
	render(){
		return (
			<div>
				{this.renderTimers()}
			</div>
		);
	}
}

TimerList.propTypes = {
	timers: PropTypes.array
}

export default TimerList;