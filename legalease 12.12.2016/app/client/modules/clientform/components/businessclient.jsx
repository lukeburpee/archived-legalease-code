import React,{ Component, PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import {connect} from 'react-redux';

import actions from './../actions';

class BusinessClientImpl extends Component {
	constructor(props){
		super(props);
	}
	handleClientName = (event) => this.props.dispatch(actions.setClientBusinessName(event.target.value));
	handleClientIndustry = (event) => this.props.dispatch(actions.setClientBusinessIndustry(event.target.value));
	handleClientPhone = (event) => this.props.dispatch(actions.setClientBusinessPhone(event.target.value));
	handleClientAddress = (event) => this.props.dispatch(actions.setClientBusinessAddress(event.target.value));
	handleClientCity = (event) => this.props.dispatch(actions.setClientBusinessCity(event.target.value));
	handleClientState = (event) => this.props.dispatch(actions.setClientBusinessState(event.target.value));
	handleClientZip = (event) => this.props.dispatch(actions.setClientBusinessZip(event.target.value));
	handlePrincipleFirstName = (event) => this.props.dispatch(actions.setClientBusinessPrincipleFirstName(event.target.value));
	handlePrincipleMiddleName = (event) => this.props.dispatch(actions.setClientBusinessPrincipleMiddleName(event.target.value));
	handlePrincipleLastName = (event) => this.props.dispatch(actions.setClientBusinessPrincipleLastName(event.target.value));
	handlePrincipleTitle = (event) => this.props.dispatch(actions.setClientBusinessPrincipleTitle(event.target.value));
	render(){
		return(
			<div>
				<ListItem disabled={true}>
					<TextField id="client-logo"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-name" fullWidth={true} underlineShow={false} underlineShow={false} onChange={this.handleClientName} value={this.props.name} floatingLabelText="Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-address" fullWidth={true} underlineShow={false} onChange={this.handleClientAddress} value={this.props.address} floatingLabelText="Address"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-phone" fullWidth={true} underlineShow={false} onChange={this.handleClientPhone} value={this.props.phone} floatingLabelText="Phone"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-business-industry" fullWidth={true} underlineShow={false} onChange={this.handleClientIndustry} value={this.props.industry} floatingLabelText="Industry"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-first-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleFirstName} value={this.props.principleFirstName} floatingLabelText="First Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-middle-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleMiddleName} value={this.props.principleMiddleName} floatingLabelText="Middle Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-last-name" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleLastName} value={this.props.principleLastName} floatingLabelText="Last Name"/>
				</ListItem>
				<ListItem disabled={true}>
					<TextField id="client-principle-contact-title" fullWidth={true} underlineShow={false} onChange={this.handlePrincipleTitle} value={this.props.principletitle} floatingLabelText="Title"/>
				</ListItem>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	name: state.clientform.clientBusinessName,
	address: state.clientform.clientBusinessAddress,
	phone: state.clientform.clientBusinessPhone,
	principleFirstName: state.clientform.clientBusinessPrincipleFirstName,
	principleMiddleName: state.clientform.clientBusinessPrincipleMiddleName,
	principleLastName: state.clientform.clientBusinessPrincipleLastName,
	principleTitle: state.clientform.clientBusinessPrincipleTitle,
	industry: state.clientform.clientBusinessIndustry
});

const BusinessClient = connect(mapStateToProps)(BusinessClientImpl);

export default BusinessClient;