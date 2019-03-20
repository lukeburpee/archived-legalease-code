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
	handleMatterName = (event) => this.props.dispatch(actions.setMatterName(event.target.value));
	handleExistingClient = (event) => this.props.dispatch(actions.setMatterExistingClient());
	handleMatterClient = (event, index, value) => this.props.dispatch(actions.setMatterClient(value));
	handleExistingCase = (event) => this.props.dispatch(actions.setMatterExistingCase());
	handleUseVendors = (event) => this.props.dispatch(actions.setMatterUseVendors())
	handleMatterCase = (event, index, value) => this.props.dispatch(actions.setMatterCase(value));
	handleMatterDescription = (event) => this.props.dispatch(actions.setMatterDescription(event.target.value));
	handleExistingVendor = (event) => this.props.dispatch(actions.setMatterExistingVendor());
	handleAddKeyword(value){
		this.props.dispatch(actions.addMatterKeyword(value));
	}
	handleRemoveKeyword(value){
		this.props.dispatch(actions.removeMatterKeyword(value));
	}
	render(){
		return(
			<List>
				<ListItem key={1} disabled={true}>
					<TextField id="matter-name" underlineShow={false} onChange={this.handleMatterName} value={this.props.name} floatingLabelText="Matter Name"/>
				</ListItem>
				<ListItem key={2} disabled={true}>
					<Toggle label="Existing Client?" style={{width:'50%', display:'inline-block', marginRight:20}} toggled={this.props.existingClient} onToggle={this.handleExistingClient}/>
				{(this.props.existingClient) ?
					<SelectField 
						style={{display:'inline-block', width:'45%'}}
						floatingLabelText="Select Client"
						value={this.props.matterClient}
						onChange={this.handleMatterClient}>
						<MenuItem/>
						<MenuItem value={1} primaryText="Client"/>
					</SelectField>: null
				}
				</ListItem>
				<ListItem key={4} disabled={true}>
					<Toggle label="Existing Case?" style={{width:'50%', display:'inline-block', marginRight:20}} toggled={this.props.existingCase} onToggle={this.handleExistingCase}/>
          		{(this.props.existingCase) ?
          			<SelectField
          				style={{display:'inline-block', width:'45%'}} 
          				floatingLabelText="Select Case"
          				value={this.props.matterCase}
          				onChange={this.handleMatterCase}>
          				<MenuItem/>
          				<MenuItem value={1} primaryText="Case"/>
          			</SelectField> : null
          		}
          		</ListItem>
          		<ListItem key={8} disabled={true}>
          		<div style={{display:'inline-block', width:'50%'}}>
          			<Toggle label="Use Vendors?"  toggled={this.props.useVendors} onToggle={this.handleUseVendors}/>
          		{(this.props.useVendors) ?
          			<Toggle  label="Existing Vendor?" toggled={this.props.existingVendor} onToggle={this.handleExistingVendor}/> : null
          		}
          		</div>
          		{(this.props.existingVendor) ?
          			<SelectField 
          				style={{display:'inline-block', marginLeft:20, width:'45%'}}
          				floatingLabelText="Select Vendor"
          				value={this.props.matterVendors}
          				onChange={this.handleMatterVendors}>
          				<MenuItem/>
          				<MenuItem value={1} primaryText="Vendor"/>
          			</SelectField> 
          			: null
          		}
          		</ListItem>
          		<ListItem key={6} disabled={true}>
          			<TextField id="matter-description" multiLine={true} rows={2} fullWidth={true} underlineShow={false} underlineShow={false} onChange={this.handleMatterDescription} value={this.props.description} floatingLabelText="Description"/>
          		</ListItem>
          		<ListItem key={7} disabled={true}>
          			<ChipInput value={this.props.matterKeywords} fullWidth={true} onRequestAdd={(chip) => this.handleAddKeyword(chip) } onRequestDelete={(chip) => this.handleRemoveKeyword(chip)} floatingLabelText="Keywords"/>
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
	useVendors: state.matterform.useVendors,
	existingVendor: state.matterform.existingVendor,
	existingCase: state.matterform.existingCase,
	matterKeywords:state.matterform.matterKeywords
});

const MatterGeneral = connect(mapStateToProps)(MatterGeneralImpl);

export default MatterGeneral;