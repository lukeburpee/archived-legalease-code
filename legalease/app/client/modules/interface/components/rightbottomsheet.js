import React from 'react';
import Layer from './layer';

const RightBottomSheet = ({right, open, meeting, meetingCount, children}) => (
	<Layer
		id="right-bottomsheet"
		zIndex={50}
		top="auto"
		bottom={0}
		left='auto'
		right={(meeting && meetingCount > 3)?'15vw':0} 
		width={(open && meetingCount > 3)?'15vw':(open)?'20vw':0}
		height={(open)?'50vh':0}
	>{children}
	</Layer>
);

export default RightBottomSheet;