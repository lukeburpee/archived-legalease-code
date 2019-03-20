import React,{ Component } from 'react';
import Layer from './layer';
import IconButton from 'material-ui/IconButton';

const Fab = ({open, direction, visible, locationX, locationY, actions}) => (
	<div style={{
		position:'fixed',
		width:(direction === 'up' || 'down')?60:'inherit', 
		left:locationX, 
		bottom:locationY}}>
		<Layer 
			id="main-fab" 
			rounded={true}
			position='absolute'
			zIndex={20} 
			height={(visible)?50:0}
			width={(visible)?50:0}
			color={actions.main.color}>
			{(visible)?<IconButton style={{width:50, height:50, padding:2, backgroundColor:actions.main.color}}>
				{(open)?actions.main.open:actions.main.closed}
			</IconButton>:null}
		</Layer>
		<div
			style={{
			position:'absolute',
			bottom:(direction === 'up')?5:'auto',
			top:(direction === 'down')?55:(direction === 'left')?5:(direction === 'right')?5:'auto',
			left:(direction === 'right')?55:(direction === 'up')?5:(direction === 'down')?5:'auto',
			right:(direction === 'left')?65:'auto',
			marginLeft:'auto',
			marginRight:'auto',
			display:'flex',
			justifyContent:'center',
			flexDirection:(direction === 'up')?'column-reverse':(direction === 'down')?'column':(direction === 'left')?'row-reverse':(direction === 'right')?'row':'column-reverse'
		}}>
		{(actions.items)?actions.items.map((action, i)=> (
				<Layer 
					id={`fab_item_${i}`}
					rounded={true}
					marginLeft={(direction === 'left')?5:null}
					marginRight={(direction === 'right')?5:null}
					marginTop={(direction === 'up')?5:null}
					marginBottom={(direction === 'down')?5:null}
					position={(open)?'relative':'absolute'}
					zIndex={400} 
					width={(visible && open)?40:0}
					height={(visible && open)?40:0}
					color={action.color}>
					{(visible || open)?<IconButton style={{width:40, height:40, padding:2, backgroundColor:action.color}}>
						{action.icon}
					</IconButton>:null}
				</Layer>
			)):null}
		</div>
	</div>
);

export default Fab;