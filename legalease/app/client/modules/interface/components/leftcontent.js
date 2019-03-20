import React from 'react';
import Layer from './layer';

const LeftContent = ({open, meeting, meetingCount, children})=>(
	<Layer 
		id="left-content" 
		zIndex={9} 
		top={'8vh'} 
		bottom={'auto'} 
		left={(meeting && meetingCount > 3)?'15vw':0} 
		right={'auto'} 
		height={'92vh'}
		width={(open && meetingCount > 3)?'15vw':(open)?'20vw':0}>
		{(open)?children:null}
	</Layer>
);

export default LeftContent;