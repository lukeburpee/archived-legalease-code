import React from 'react';
import Layer from './layer';

const MainUtilities = ({open, left, right, children})=>(
	<Layer 
		id="main-content" 
		zIndex={5} 
		top={'8vh'} 
		bottom={'auto'} 
		left={(left)?'20vw':0} 
		right={(right)?'20vw':0} 
		height={(open)?'52vh':0}
		width={(left && right)?'60vw':(left || right)?'80vw':'100vw'}>
		{(open)?children:null}
	</Layer>
);

export default MainUtilities;