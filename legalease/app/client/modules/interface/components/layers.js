import React, { Component } from 'react';
import Layer from './layer';

import {connect} from 'react-redux';

const LayersImpl = ({layers}) => (
	<div>
		{
			layers.map((layer, i) =>(
				<Layer 
					key={i}
					id={layer.id} 
					zIndex={layer.zIndex} 
					color={layer.color}
					top={layer.top} 
					bottom={layer.bottom}
					left={layer.left}
					right={layer.right}
					width={layer.width}
					height={layer.height}
					align={layer.align}
					margin={layer.margin}
					marginLeft={layer.marginLeft}
					marginRight={layer.marginRight}
					marginTop={layer.marginTop}
					marginBottom={layer.marginBottom}
				>{layer.content}</Layer>
		))}
	</div>
);

const mapStateToProps = (state) => ({
	layers: state.core.layout.layers
});

const Layers = connect(mapStateToProps)(LayersImpl);

export default Layers;

