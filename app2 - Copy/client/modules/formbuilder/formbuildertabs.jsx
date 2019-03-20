import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

const FormBuilderTabs = () => (
	<Paper
		style={{
			backgroundColor:'#130070',
			position:'relative',
			top:0,
			bottom:'auto',
			left:0,
			right:'auto',
			width:'100%',
			height:'20vh'
		}}>
		<Tabs style={{
			backgroundColor:'#130070',
			width:'inherit',
			position:'relative',
			top:'auto',
			bottom:0,
			left:60,
			right:'auto'}}>
			<Tab label="Forms"/>
			<Tab label="Fields"/>
			<Tab label="Elements"/>
		</Tabs>
	</Paper>
);

export default FormBuilderTabs;