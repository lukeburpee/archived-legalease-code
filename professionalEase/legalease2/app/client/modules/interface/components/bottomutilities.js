import React from 'react';
import Layer from './layer';

const BottomUtilities = ({open, left, right, children})=>(
	<Layer 
		id="bottom-utilities" 
		zIndex={5} 
		top={'auto'} 
		bottom={0} 
		left={(left)?'20vw':0} 
		right={(right)?'20vw':0} 
		height={(!open)?0:'42vh'}
		width={(left && right)?'60vw':(left || right)?'80vw':'100vw'}>
		{(open)?children:null}
	</Layer>
);

export default BottomUtilities;