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
import {connect} from 'react-redux';

import actions from './../actions';

class MatterGeneralImpl extends Component {
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
	handleMatterClient = (event, index, value) => this.setState({client:value});
	handleExistingCase = (event) => this.setState({existingCase:!this.state.existingCase});
	handleMatterCase = (event, index, value) => this.setState({case:value});
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
					<TextField id="matter-name" underlineShow={false} onChange={this.handleMatterName} value={this.props.name} floatingLabelText="Matter Name"/>
				</ListItem>
				<ListItem key={2} disabled={true}>
					<Toggle label="Existing Client?" toggled={this.props.existingClient} onToggle={this.handleExistingClient}/>
				</ListItem>
				{
					(this.props.existingClient) ?
						<ListItem key={3} disabled={true}>
							<SelectField 
								floatingLabelText="Select Client"
								value={this.props.client}
								onChange={this.handleMatterClient}>
								<MenuItem/>
								<MenuItem value={1} primaryText="Client"/>
							</SelectField>
						</ListItem> : null
				}
				<ListItem key={4} disabled={true}>
					<Toggle label="Existing Case?" toggled={this.props.existingCase} onToggle={this.handleExistingCase}/>
				</ListItem>
          		{
          			(this.props.existingCase) ?
          				<ListItem key={5} disabled={true}>
          					<SelectField 
          						floatingLabelText="Select Case"
          						value={this.props.matterCase}
          						onChange={this.handleMatterCase}>
          						<MenuItem/>
          						<MenuItem value={1} primaryText="Case"/>
          					</SelectField>
          				</ListItem> : null
          		}
          		<ListItem key={6} disabled={true}>
          			<TextField id="matter-description" fullWidth={true} underlineShow={false} underlineShow={false} onChange={this.handleMatterDescription} value={this.props.description} floatingLabelText="Description"/>
          		</ListItem>
          		<ListItem key={7} disabled={true}>
          			<ChipInput value={this.props.matterKeywords} fullWidth={true} onRequestAdd={(chip) => handleAddKeyword(chip) } onRequestDelete={(chip) => handleRemoveKeyword(chip)} floatingLabelText="Keywords"/>
          		</ListItem>
          	</List>
        );
	}
}

const mapStateToProps = (state) => ({
	name: state.matterform.matterName,
	stage: state.matterform.matterStage,
	description: state.matterform.matterDescription,
	matterClient: state.matterform.matterClient,
	existingClient: state.matterform.existingClient,
	matterCase: state.matterform.matterCase,
	existingCase: state.matterform.existingCase,
	matterKeywords:state.matterform.matterKeywords
});

const MatterGeneral = connect(mapStateToProps)(MatterGeneralImpl);

export default MatterGeneral;