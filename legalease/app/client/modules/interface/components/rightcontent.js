import React from 'react';
import Layer from './layer';

const RightContent = ({open, meeting, meetingCount, children})=>(
	<Layer 
		id="right-content" 
		zIndex={9} 
		top={'8vh'} 
		bottom={'auto'} 
		left={'auto'} 
		right={(meeting && meetingCount > 3)?'15vw':0} 
		height={'92vh'}
		width={(open && meetingCount > 3)?'15vw':(open)?'20vw':0}>
		{(open)?children:null}
	</Layer>
);

export default RightContent;