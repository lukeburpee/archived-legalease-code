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

import NewClient from './../../clientform/components/newclient.jsx';
import NewCase from './newcase.jsx';
import MatterGeneral from './../../matterform/components/mattergeneral.jsx';
import MatterDetails from './../../matterform/components/matterdetails.jsx';
import DiscoveryDetails from './discoverydetails.jsx';

class NewMatter extends Component {
  state = {
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
            labelStyle={{position:'relative', top:2}}
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12, marginTop:7}}
          />
          <RaisedButton
            labelStyle={{position:'relative', top:7}}
            label={stepIndex === 4 ? 'Finish' : 'Save & Next'}
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