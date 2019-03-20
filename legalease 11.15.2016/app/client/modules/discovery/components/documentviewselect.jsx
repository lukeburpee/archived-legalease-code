import React, { Component, PropTypes } from 'react';
import { ToolbarGroup } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class DocumentViewSelectImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
    		value: 1
    	}
  	}
  	handleChange = (event, index, value) => this.setState({value});
	render(){
		return (
			<ToolbarGroup firstChild={true}>
				<DropDownMenu value={this.state.value} onChange={this.handleChange}>
					<MenuItem value={1} primaryText="All Matter Documents"/>
					<MenuItem value={2} primaryText="All Assigned Documents"/>
					<MenuItem value={3} primaryText="All First Pass Unreviewed Documents"/>
					<MenuItem value={4} primaryText="All First Pass Documents"/>
				</DropDownMenu>
			</ToolbarGroup>
		);
	}
}

DocumentViewSelectImpl.propTypes = {
  matters: PropTypes.array
}

export default DocumentViewSelectImpl;