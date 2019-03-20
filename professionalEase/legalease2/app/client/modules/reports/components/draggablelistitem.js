import React,{ Component, PropTypes } from 'react';
import {DragSource} from 'react-dnd';
import Paper from 'material-ui/Paper';
import {ListItem} from 'material-ui/List';
import {Draggable} from 'react-drag-and-drop';
import {indigo200} from 'material-ui/styles/colors';

const DraggableListItem = ({avatar, label, type, data, onDragStart, onDragEnd, children}) => (
	<ListItem>
		<Draggable type={type} data={data} onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<Paper style={{height:60, padding:10}}>
			<div style={{display:'inline-block', float:'left', position:'relative', top:10}}>
				{label}
			</div>
			<div style={{display:'inline-block', float:'right'}}>
				{avatar}
			</div>
			</Paper>
		</Draggable>
	</ListItem>
);

export default DraggableListItem;