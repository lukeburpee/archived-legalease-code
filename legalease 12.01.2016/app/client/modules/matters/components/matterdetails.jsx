import React,{ Component, PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';

class MatterDetails extends Component {
	state = {
		matterType: null,
		matterStage: null
	};
	handleMatterType = (event, index, value) => this.setState({matterType:value});
	handleMatterStage = (event, index, value) => this.setState({matterStage:value});
	render(){
		return(
			<List>
				<ListItem disabled={true}>
					<SelectField
						floatingLabelText="Matter Type"
						value={this.state.matterType}
						onChange={this.handleMatterType}>
						<MenuItem value={null}/>
						<MenuItem value={1} primaryText="Government"/>
						<MenuItem value={2} primaryText="Private"/>
						<MenuItem value={3} primaryText="Both"/>
					</SelectField>
				</ListItem>
				<ListItem disabled={true}>
					<SelectField
						floatingLabelText="Matter Stage"
						value={this.state.matterStage}
						onChange={this.handleMatterStage}>
						<MenuItem value={null}/>
						<MenuItem value={1} primaryText="Investation"/>
						<MenuItem value={2} primaryText="Pleadings"/>
						<MenuItem value={3} primaryText="Discovery"/>
						<MenuItem value={4} primaryText="Trial"/>
						<MenuItem value={5} primaryText="Appeals"/>
					</SelectField>
				</ListItem>
				<ListItem disabled={true}>
					<Toggle label="Change Default Permissions?"/>
				</ListItem>
			</List>
		);
	}
}

export default MatterDetails;