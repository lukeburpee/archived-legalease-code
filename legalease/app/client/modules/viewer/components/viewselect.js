import React from 'react';
import { ToolbarGroup } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const ViewSelect = ({view}) => (
	<ToolbarGroup>
		<DropDownMenu value={'pdf'}>
			<MenuItem primaryText='pdf view' value={'pdf'}/>
			<MenuItem primaryText='html view' value={'html'}/>
			<MenuItem primaryText='text view' value={'text'}/>
		</DropDownMenu>
	</ToolbarGroup>
);

export default ViewSelect;