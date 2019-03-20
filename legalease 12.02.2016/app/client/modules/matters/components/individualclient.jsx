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

class IndividualClient extends Component {
	state = {
		clientFirstName: '',
		clientMiddleName: '',
		clientLastName:'',
		clientAddress: '',
		clientState: '',
		clientZip: '',
		clientPhone: '',
		clientEmail: ''
	};
	handleClientFirstName = (event) => this.setState({clientFirstName:event.target.value});
	handleClientMiddleName = (event) => this.setState({clientMiddleName:event.target.value});
	handleClientLastName = (event) => this.setState({clientLastName:event.target.value});
	handleClientAddress = (event) => this.setState({clientAddress:event.target.value});
	handleClientZip = (event) => this.setState({clientZip:event.target.value});
	handleClientState = (event) => this.setState({clientState:event.target.value});
	handleClientPhone = (event) => this.setState({clientPhone:event.target.value});
	handleClientEmail = (event) => this.setState({clientEmail:event.target.value});
	render(){
		return(
			<div>
				<ListItem disabled={true}>
					<TextField id="client-individual-first-name" underlineShow={false} onChange={this.handleClientFirstName} value={this.state.clientFirstName} floatingLabelText="First Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-middle-name" underlineShow={false} onChange={this.handleClientMiddleName} value={this.state.clientMiddleName} floatingLabelText="Middle Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-last-name" underlineShow={false} onChange={this.handleClientLastName} value={this.state.clientLastName} floatingLabelText="Last Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-address" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.state.clientAddress} floatingLabelText="Address"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-phone" fullWidth={true} underlineShow={false} onChange={this.handleClientPhone} value={this.state.clientPhone} floatingLabelText="Phone Number"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-email" fullWidth={true} underlineShow={false} onChange={this.handleClientEmail} value={this.state.clientEmail} floatingLabelText="Email"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-avatar"/>
				</ListItem>
			</div>
		);
	}
}

export default IndividualClient;