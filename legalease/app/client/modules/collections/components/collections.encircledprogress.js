import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress';
import ProgressDescription from './collections.progressdescription';

const EncircledProgress = ({size, progress, count}) => (
	<div style={{position:'relative', width:size, height:size}}>
		<CircularProgress 
			style={{position:'absolute'}}
			size={size}
			mode="determinate"
			value={progress}/>
		<div style={{position:'absolute', top:16, left:(progress === 100)?12:16}}>
			<ProgressDescription size={size} progress={progress} count={count}/>
		</div>
	</div>
);

export default EncircledProgress;