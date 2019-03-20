import React from 'react';
import Layer from './layer';

const MainTool = ({left, right, editor, viewer, meeting, meetingCount, children})=>(
	<Layer 
		id="main-toolbar" 
		zIndex={5} 
		top={(editor || viewer)?'8vh':(meeting)?'24vh':(!left || !right)?'8vh':'16vh'} 
		bottom={'auto'} 
		left={(left && meeting && meetingCount > 3)?'30vw':(!left && meeting && meetingCount > 3)?'15vw':(left)?'20vw':0} 
		right={(right)?'20vw':0} 
		height={'8vh'}
		width={(left && right && meeting && meetingCount > 3)?'40vw':((meeting && meetingCount > 3) && ((!left && right) || (left && !right)))?'55vw':((meeting && meetingCount > 3) && !right && !left)?'70vw':(left && right)?'60vw':(left || right)?'80vw':'100vw'}>
		{children}
	</Layer>
);

export default MainTool;