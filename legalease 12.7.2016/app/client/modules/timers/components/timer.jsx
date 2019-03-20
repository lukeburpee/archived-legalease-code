import React, { PropTypes } from 'react';
import Clock, { Themes } from 'react-analog-clock';
import Paper from 'material-ui/Paper';
import Fab from 'material-ui/FloatingActionButton';
import { indigo900, grey100 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MinimizeIcon from 'material-ui/svg-icons/editor/format-indent-decrease';
import MaximizeIcon from 'material-ui/svg-icons/editor/format-indent-increase';
import StartIcon from 'material-ui/svg-icons/av/play-arrow';
import StopIcon from 'material-ui/svg-icons/av/stop';
import CancelIcon from 'material-ui/svg-icons/content/clear';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

const Timer = ({label, active, time, startTimer, stopTimer}) => (
	<Paper style={{height:240, width:190, backgroundColor:grey100, marginBottom:20}}>
		<Paper style={{height:220, width:170, position:'relative', left:10, top:10, right:'auto'}}>
			<Toolbar style={{backgroundColor:indigo900, height:40}}>
				<ToolbarGroup style={{marginLeft:'-5px', marginTop:'-5px'}}>
					<ToolbarTitle style={{color:'white', textAlign:'left', marginLeft:'-10px'}} text={label + ': ' + time}/>
				</ToolbarGroup>
			</Toolbar>
			<div style={{marginLeft:30, marginRight:30, marginTop:10}}>
				<Clock width={100} theme={Themes.light}/>
				<div style={{position:'relative', display:'inline-block', top:2, bottom:'auto', left:'auto'}}>
					<Fab backgroundColor={indigo900} disabled={(active)?false:true} mini={true}>
						<StartIcon/>
					</Fab>
					<Fab backgroundColor={indigo900} style={{marginLeft:30}} disabled={(active)?true:false} mini={true}>
						<StopIcon/>
					</Fab>
				</div>
			</div>
		</Paper>
	</Paper>
);

Timer.propTypes = {
	label: PropTypes.string,
	active: PropTypes.bool,
	time: PropTypes.string,
	startTimer: PropTypes.func,
	stopTimer: PropTypes.func
}

export default Timer;