import React, { Component } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { indigo900 } from 'material-ui/styles/colors';

class TimekeeperToolbar extends Component {
	render(){
		return (
			<Toolbar noGutter={true} style={{width:'inherit', height:'70px', backgroundColor:indigo900}}/>
		);
	}
}

export default TimekeeperToolbar;