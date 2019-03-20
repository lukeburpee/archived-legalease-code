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
import NewClient from './newclient.jsx';
import NewCase from './newcase.jsx';
import MatterGeneral from './mattergeneral.jsx';
import MatterDetails from './matterdetails.jsx';
import DiscoveryDetails from './discoverydetails.jsx';

class NewMatter extends Component {
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
    loading: false,
    finished: false,
    stepIndex: 0,
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 400);
    });
  };
  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 5,
      }));
    }
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };
  handleTouchStep(value){
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: value,
        finished: stepIndex >= 5,
      }));
    }
  };
  handleMatterName = (event) => this.setState({matterName: event.target.value});
  handleClientName = (event) => this.setState({clientName: event.target.value});
  handleClientAddress = (event) => this.setState({clientAddress: event.target.value});
  handleClientPhone = (event) => this.setState({clientPhone: event.target.value});
  handleClientPrincipleContact = (event) => this.setState({clientPrincipleContact: event.target.value});
  handleCaseName = (event) => this.setState({caseName: event.target.value});
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
  handleMatterType = (event, index, value) => this.setState({matterType:value});
  handleClientType = (event, index, value) => this.setState({clientType:value});
  handleMatterStage = (event, index, value) => this.setState({matterStage:value});
  handleClient = (event, index, value) => this.setState({client:value});
  handleCase = (event, index, value) => this.setState({case:value});
  handleExistingCase = (event) => this.setState({existingCase:!this.state.existingCase});
  handleExistingClient = (event) => this.setState({existingClient:!this.state.existingClient});
  handleIndividualClientFirstName = (event) => this.setState({individualClientFirstName:!this.state.existingClient});
  handleIndividualClientLastName = (event) => this.setState({individualClientLastName:!this.state.existingClient});
  handleIndividualClientAddress = (event) => this.setState({individualClientAddress:!this.state.existingClient});
  handleIndividualClientPhone = (event) => this.setState({individualClientPhoneNumber:!this.state.existingClient});
  handleClientIndustry = (event) => this.setState({businessClientIndustry:!this.state.existingClient});
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <MatterGeneral/>
        );
      case 1:
        return (
          <MatterDetails/>
        );
      case 2:
        return (
          <NewClient/>
         )
      case 3:
        return (
          <NewCase/>
        )
      case 4:
        return (
          <DiscoveryDetails/>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  renderStepper() {
    const {stepIndex} = this.state;
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
  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};
    if (finished) {
      return (
        <div style={contentStyle}>
        </div>
      );
    }
    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            labelStyle={{position:'relative', top:7}}
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            labelStyle={{position:'relative', top:7}}
            label={stepIndex === 5 ? 'Finish' : 'Save & Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;
    const stepper = this.renderStepper();
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
      {stepper}
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default NewMatter;