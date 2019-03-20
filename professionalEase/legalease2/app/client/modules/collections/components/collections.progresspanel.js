import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import StartIcon from 'material-ui/svg-icons/av/play-arrow';
import RestartIcon from 'material-ui/svg-icons/av/replay';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import CancelIcon from 'material-ui/svg-icons/content/clear';

import EncircledProgress from './collections.encircledprogress';

const ProgressPanel = ({collection, name, progress, count, isActive, isPaused}) => (
	<Card style={{width:150, height:175, position:'relative'}}>
		<CardTitle style={{textAlign:'center'}}>{`${collection}: ${name}`}</CardTitle>
		<div style={{position:'absolute', bottom:50, left:37.5}}>
			<EncircledProgress size={75} count={count} progress={progress}/>
		</div>
		<div style={{position:'absolute', left:20, bottom:10}}>
			<FloatingActionButton mini={true} style={{marginRight:30}}>{(isPaused)?<RestartIcon/>:(isActive)?<PauseIcon/>:<PlayIcon/>}</FloatingActionButton>
			<FloatingActionButton mini={true}><CancelIcon/></FloatingActionButton>
		</div>
	</Card>
);

export default ProgressPanel;