import React,{ Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs'

const FormBuilderLeftToolbar = ({active, onChange}) => (
			<Tabs style={{width:'inherit', height:'100%'}} onChange={onChange} value={active}>
				<Tab style={{fontSize:10}} label="Forms" value="forms"/>
				<Tab style={{fontSize:10}} label="Sections" value="sections"/>
				<Tab style={{fontSize:10}} label="Fields" value="fields"/>
			</Tabs>
);

export default FormBuilderLeftToolbar;