import React,{ Component } from 'react';
import Paper from 'material-ui/Paper';
import ReactTransitionGroup from 'react-addons-transition-group';

const Layer = (props) => (
	<ReactTransitionGroup>
	<Paper
		className="layer"
		zDepth={props.zDepth}
		circle={props.rounded}
		style={{
			position: (props.position)?props.position:'fixed',
			zIndex: props.zIndex,
			top: props.top,
			bottom: props.bottom,
			left: props.left,
			right: props.right,
			width: props.width,
			textAlign: props.align,
			height: props.height,
			margin: props.margin,
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
			marginLeft: props.marginLeft,
			marginRight: props.marginRight,
			overflowY:(scrollY)?'scroll':'hidden',
			overflowX:(scrollX)?'auto':'hidden',
			backgroundColor:props.color
	}}>
		{props.children}
	</Paper>
	</ReactTransitionGroup>
);

export default Layer;