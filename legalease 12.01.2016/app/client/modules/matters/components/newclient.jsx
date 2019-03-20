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
import IndividualClient from './individualclient.jsx';
import BusinessClient from './businessclient.jsx';
class NewClient extends Component {
	state = {
		matterName: '',
		matterType: null,
		existingClient: true,
		clientType: null,
		client: null,
		clientName: '',
		clientAddress: '',
		clientPhone: '',
		clientPrincipleContact: '',
		case: null,
		caseName: '',
		existingCase: true,
		matterDescription: '',
		matterKeywords: [],
		matterCourts: null,
	};
	handleClientType = (event, index, value) => this.setState({clientType:value});
	handleIndividualClientFirstName = (event) => this.setState({individualClientFirstName:!this.state.existingClient});
	handleIndividualClientLastName = (event) => this.setState({individualClientLastName:!this.state.existingClient});
	handleIndividualClientAddress = (event) => this.setState({individualClientAddress:!this.state.existingClient});
	handleIndividualClientPhone = (event) => this.setState({individualClientPhoneNumber:!this.state.existingClient});
	handleClientIndustry = (event) => this.setState({businessClientIndustry:!this.state.existingClient});
	render(){
		return(
			<List>
				<ListItem disabled={true}>
					<SelectField value={this.state.clientType} onChange={this.handleClientType} floatingLabelText="Client Type">
						<MenuItem/>
						<MenuItem value={1} primaryText="Individual"/>
						<MenuItem value={2} primaryText="Business"/>
					</SelectField>
				</ListItem>
				{ 
					(this.state.clientType === 1) ? <IndividualClient/> : <BusinessClient/>
				}
          </List>
		);
	}
}

export default NewClient;