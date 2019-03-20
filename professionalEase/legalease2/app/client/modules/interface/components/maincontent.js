import React from 'react';
import Layer from './layer';

const MainContent = ({left, right, viewer, editor, meeting, meetingCount, children})=>(
	<Layer 
		id="main-content" 
		style={{overflowY:'scroll'}}
		zIndex={1} 
		top={(editor || viewer)?'calc(16vh)':((left || right) && meeting)?'calc(32vh)':(left || right)?'calc(24vh)':'calc(16vh)'} 
		bottom={0} 
		left={(left && meeting && meetingCount > 3)?'30vw':(!left && meeting && meetingCount > 3)?'15vw':(left)?'20vw':0} 
		right={(right)?'20vw':0} 
		height={(!left || !right)?'92vh':'84vh'}
		width={(left && right && meeting && meetingCount > 3)?'40vw':((meeting && meetingCount > 3) && ((!left && right) || (left && !right)))?'55vw':((meeting && meetingCount > 3) && !right && !left)?'70vw':(left && right)?'60vw':(left || right)?'80vw':'100vw'}>
		{children}
	</Layer>
);

export default MainContent;