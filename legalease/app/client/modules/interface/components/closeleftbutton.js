import React from 'react';
import {ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import OpenLeftIcon from 'material-ui/svg-icons/av/skip-next';
import CloseLeftIcon from 'material-ui/svg-icons/av/skip-previous';

const CloseLeftButton = ({open}) => (
	<ToolbarGroup firstChild={true}><IconButton>{(open)?<CloseLeftIcon color='white'/>:<OpenLeftIcon color='white'/>}</IconButton></ToolbarGroup>
);

export default CloseLeftButton;