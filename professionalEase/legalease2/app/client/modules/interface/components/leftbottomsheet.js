import React from 'react';
import Layer from './layer';

const LeftBottomSheet = ({left, open, meeting, meetingCount, children}) => (
	<Layer
		id="left-bottomsheet"
		zIndex={50}
		top="auto"
		bottom={0}
		left={(meeting && meetingCount > 3)?'15vw':0} 
		right='auto'
		width={(open && meetingCount > 3)?'15vw':(open)?'20vw':0}
		height={(open)?'50vh':0}
	>{children}
	</Layer>
);

export default LeftBottomSheet;