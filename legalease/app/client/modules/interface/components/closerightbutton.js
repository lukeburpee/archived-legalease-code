import React from 'react';
import {ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import OpenLeftIcon from 'material-ui/svg-icons/av/skip-next';
import CloseLeftIcon from 'material-ui/svg-icons/av/skip-previous';

const CloseRightButton = ({open}) => (
	<ToolbarGroup lastChild={true}><IconButton>{(open)?<OpenLeftIcon color='white'/>:<CloseLeftIcon color='white'/>}</IconButton></ToolbarGroup>
);

export default CloseRightButton;