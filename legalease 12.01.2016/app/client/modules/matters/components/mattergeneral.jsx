import React,{ Component, PropTypes } from 'react';
import {
	Step,
	Stepper,
  StepButton,
	StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ChipInput from 'material-ui-chip-input';
import { List, ListItem } from 'material-ui/List';

class MatterGeneral extends Component {
	state = {
		matterName: '',
		existingClient: true,
		client: null,
		case: null,
		existingCase: true,
		matterDescription: '',
		matterKeywords: []
	};
	
	handleMatterName = (event) => this.setState({matterName: event.target.value});
	handleExistingClient = (event) => this.setState({existingClient:!this.state.existingClient});
	handleClient = (event, index, value) => this.setState({client:value});
	handleExistingCase = (event) => this.setState({existingCase:!this.state.existingCase});
	handleCase = (event, index, value) => this.setState({case:value});
	handleMatterDescription = (event) => this.setState({matterDescription: event.target.value});
	handleAddKeyword(value){
		let newValue = [
			this.state.matterKeywords,
			value
		];
		this.setState({matterKeywords: newValue })
	}
	handleRemoveKeyword(value){
		let index = this.state.matterKeywords.indexOf(value);
		let newValue = [
			this.state.matterKeywords.slice(0,index),
			this.state.matterKeywords.slice(index,)
		];
		this.setState({matterKeywords: newValue });
	}
	render(){
		return(
			<List>
				<ListItem key={1} disabled={true}>
					<TextField id="matter-name" underlineShow={false} onChange={this.handleMatterName} value={this.state.matterName} floatingLabelText="Matter Name"/>
				</ListItem>
				<ListItem key={2} disabled={true}>
					<Toggle label="Existing Client?" toggled={this.state.existingClient} onToggle={this.handleExistingClient}/>
				</ListItem>
				{
					(this.state.existingClient) ?
						<ListItem key={3} disabled={true}>
							<SelectField 
								floatingLabelText="Select Client"
								value={this.state.client}
								onChange={this.handleClient}>
								<MenuItem/>
								<MenuItem value={1} primaryText="Client"/>
							</SelectField>
						</ListItem> : null
				}
				<ListItem key={4} disabled={true}>
					<Toggle label="Existing Case?" toggled={this.state.existingCase} onToggle={this.handleExistingCase}/>
				</ListItem>
          		{
          			(this.state.existingCase) ?
          				<ListItem key={5} disabled={true}>
          					<SelectField 
          						floatingLabelText="Select Case"
          						value={this.state.case}
          						onChange={this.handleCase}>
          						<MenuItem/>
          						<MenuItem value={1} primaryText="Case"/>
          					</SelectField>
          				</ListItem> : null
          		}
          		<ListItem key={6} disabled={true}>
          			<TextField id="matter-description" fullWidth={true} underlineShow={false} underlineShow={false} onChange={this.handleMatterDescription} value={this.state.matterDescription} floatingLabelText="Description"/>
          		</ListItem>
          		<ListItem key={7} disabled={true}>
          			<ChipInput value={this.state.matterTags} fullWidth={true} onRequestAdd={(chip) => handleAddKeyword(chip) } onRequestDelete={(chip) => handleRemoveKeyword(chip)} floatingLabelText="Keywords"/>
          		</ListItem>
          	</List>
        );
	}
}

export default MatterGeneral;