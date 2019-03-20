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
import {connect} from 'react-redux';

import actions from './../actions';

class NewClientImpl extends Component {
	constructor(props){
		super(props);
	}
	handleClientType = (event, index, value) => this.props.dispatch(actions.setClientType(value));
	render(){
		return(
			<List>
				<ListItem disabled={true}>
					<SelectField value={this.props.clientType} onChange={this.handleClientType} floatingLabelText="Client Type">
						<MenuItem/>
						<MenuItem value={1} primaryText="Individual"/>
						<MenuItem value={2} primaryText="Business"/>
					</SelectField>
				</ListItem>
				{ 
					(this.props.clientType === 1) ? <IndividualClient/> : <BusinessClient/>
				}
          </List>
		);
	}
}

const mapStateToProps = (state) => ({
	clientType: state.clientform.clientType
});

const NewClient = connect(mapStateToProps)(NewClientImpl);

export default NewClient;