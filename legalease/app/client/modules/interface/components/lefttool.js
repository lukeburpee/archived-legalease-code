import React from 'react';
import Layer from './layer';

const LeftTool = ({open, meeting, meetingCount, children})=>(
	<Layer 
		id="left-toolbar" 
		zIndex={11} 
		top={0} 
		bottom={'auto'} 
		left={0} 
		right={'auto'} 
		height={'8vh'}
		width={(open && meeting && meetingCount > 3)?'30vw':(!open && meeting && meetingCount > 3)?'15vw':(open)?'20vw':0}>
		{(open || meetingCount > 3)?children:null}
	</Layer>
);

export default LeftTool;