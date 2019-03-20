import React from 'react';
import Layer from './layer';

const RightTool = ({open, meeting, meetingCount, children})=>(
	<Layer 
		id="right-toolbar" 
		zIndex={11} 
		top={0} 
		bottom={'auto'} 
		left={'auto'} 
		right={0} 
		height={'8vh'}
		width={(open && meeting && meetingCount > 3)?'30vw':(!open && meeting && meetingCount > 3)?'15vw':(open)?'20vw':0}>
		{(open || meetingCount > 3)?children:null}
	</Layer>
);

export default RightTool;