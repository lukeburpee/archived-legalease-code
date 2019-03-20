import React,{ Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

const FormBuilderMainToolbar = ({name}) => (
	<Toolbar style={{width:'inherit', height:'inherit'}}><ToolbarGroup style={{paddingBottom:2}}><TextField floatingLabelText='Form Name' value={name}/></ToolbarGroup></Toolbar>
);

export default FormBuilderMainToolbar;