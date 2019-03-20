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

class IndividualClientImpl extends Component {
	constructor(props){
		super(props);
	}
	handleClientFirstName = (event) => this.props.dispatch(actions.setClientIndividualFirstName(event.target.value));
	handleClientMiddleName = (event) => this.props.dispatch(actions.setClientIndividualMiddleName(event.target.value));
	handleClientLastName = (event) => this.props.dispatch(actions.setClientIndividualLastName(event.target.value));
	handleClientAddress = (event) => this.props.dispatch(actions.setClientIndividualAddress(event.target.value));
	handleClientZip = (event) => this.props.dispatch(actions.setClientIndividualZip(event.target.value));
	handleClientState = (event) => this.props.dispatch(actions.setClientIndividualState(event.target.value));
	handleClientPhone = (event) => this.props.dispatch(actions.setClientIndividualPhone(event.target.value));
	handleClientEmail = (event) => this.props.dispatch(actions.setClientIndividualEmail(event.target.value));
	render(){
		return(
			<div>
				<ListItem disabled={true}>
					<TextField id="client-individual-first-name" underlineShow={false} onChange={this.handleClientFirstName} value={this.props.firstname} floatingLabelText="First Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-middle-name" underlineShow={false} onChange={this.handleClientMiddleName} value={this.props.middlename} floatingLabelText="Middle Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-last-name" underlineShow={false} onChange={this.handleClientLastName} value={this.props.lastname} floatingLabelText="Last Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-address" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.props.address} floatingLabelText="Address"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-city" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.props.city} floatingLabelText="City"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-state" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.props.state} floatingLabelText="State"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-phone" fullWidth={true} underlineShow={false} onChange={this.handleClientPhone} value={this.props.phone} floatingLabelText="Phone Number"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-email" fullWidth={true} underlineShow={false} onChange={this.handleClientEmail} value={this.props.email} floatingLabelText="Email"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-individual-avatar"/>
				</ListItem>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	firstname: state.clientform.clientIndividualFirstName,
	middlename: state.clientform.clientIndividualMiddleName,
	lastname: state.clientform.clientIndividualLastName,
	address: state.clientform.clientIndividualAddress,
	city: state.clientform.clientIndividualCity,
	state: state.clientform.clientIndividualState,
	zip: state.clientform.clientIndividualZip,
	email: state.clientform.clientIndividualEmail,
	phone: state.clientform.clientIndividualPhone
});

const IndividualClient = connect(mapStateToProps)(IndividualClientImpl);

export default IndividualClient;