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

class MatterStepper extends Component {
	render(){
		return(
			<Stepper linear={false} activeStep={stepIndex}>
				<Step>
					<StepButton onClick={()=> this.handleTouchStep(0)}>General</StepButton>
				</Step>
				<Step>
					<StepButton onClick={()=> this.handleTouchStep(1)}>Details</StepButton>
				</Step>
				<Step>
					<StepButton onClick={() => this.handleTouchStep(2)}>Client</StepButton>
				</Step>
				<Step>
					<StepButton onClick={()=> this.handleTouchStep(3)}>Case</StepButton>
				</Step>
				<Step>
					<StepButton onClick={()=> this.handleTouchStep(4)}>Discovery</StepButton>
				</Step>
			</Stepper>
		);
	}
}

export default MatterStepper;