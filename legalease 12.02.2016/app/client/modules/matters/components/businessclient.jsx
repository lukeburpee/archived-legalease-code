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

class BusinessClient extends Component {
	state = {
		client: null,
		clientLogo: null,
		clientName: '',
		clientAddress: '',
		clientZip: '',
		clientState: '',
		principleContactFirstName: '',
		principleContactMiddleName: '',
		principleContactLastName: '',
		principleContactTitle: ''
	};
	render(){
		return(
			<div>
				<ListItem disabled={true}>
					<TextField id="client-business-name" fullWidth={true} underlineShow={false} underlineShow={false} onChange={this.handleClientName} value={this.state.clientName} floatingLabelText="Client Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-address" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.state.clientBusinessAddress} floatingLabelText="Client Address"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-phone" fullWidth={true} underlineShow={false} onChange={this.handleClientPhone} value={this.state.clientBusinessPhone} floatingLabelText="Client Phone Number"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-first-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleContactFirstName} value={this.state.principleContactFirstName} floatingLabelText="First Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-middle-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleContactMiddleName} value={this.state.principleContactMiddleName} floatingLabelText="Middle Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-last-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleContactLastName} value={this.state.principleContactLastName} floatingLabelText="Last Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-title" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleContactTitle} value={this.state.principleContact} floatingLabelText="First Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-industry" fullWidth={true} underlineShow={false} onChange={this.handleClientIndustry} value={this.state.clientIndustry} floatingLabelText="Client Industry"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-logo"/>
				</ListItem>
			</div>
		);
	}
}

export default BusinessClient;