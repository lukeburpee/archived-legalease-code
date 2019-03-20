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
import NewCase from './../../caseform/components/newcase.jsx';
import DiscoveryDefaultSettings from './../../discoveryform/components/discoverydefaultsettings.jsx';
import MatterGeneral from './mattergeneral.jsx';
import MatterDetails from './matterdetails.jsx';

import {connect} from 'react-redux';
import {useDeps} from 'mantra-core';

import actions from './../actions';


class NewMatterImpl extends Component {
  state = {
    loading: false
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 400);
    });
  };
  handleNext = () => {
    const {stepIndex} = this.props;
    if (!this.state.loading) {
      this.dummyAsync(() => {this.setState({
        loading: false
      })
      this.props.dispatch(actions.matterFormNextStep());
      });
    }
  };
  handleNextAndSave(value){
    const {Meteor, Store, stepIndex} = this.props;
    if (!this.state.loading) {
      this.dummyAsync(() => {this.setState({
        loading: false
      })
      this.props.dispatch(actions.matterFormNextStepAndSave(Meteor, Store, value));
      });
    }
  };
  handlePrev = () => {
    const {stepIndex} = this.props;
    if (!this.state.loading) {
      this.dummyAsync(() => {this.setState({
        loading: false
      })
      this.props.dispatch(actions.matterFormPreviousStep());
      });
    }
  };
  handleTouchStep(value){
    const {stepIndex} = this.props;
    if (!this.state.loading) {
      this.dummyAsync(() => {this.setState({
        loading: false
      })
      this.props.dispatch(actions.setMatterFormStep(value));
      });
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
          <DiscoveryDefaultSettings/>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  renderStepper() {
    const {stepIndex, existingClient, existingCase, useVendors, existingVendor} = this.props;
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
    const {finished, stepIndex} = this.props;
    const contentStyle = {margin: '0 16px', height:'70vh', overflowY: 'auto'};
    if (finished) {
      return (
        <div style={contentStyle}>
        </div>
      );
    }
    return (
      <div>
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
      </div>
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
            label='Next'
            disabled={stepIndex === 4}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12, marginTop:7}}
          />
          <RaisedButton
            labelStyle={{position:'relative', top:7}}
            label={stepIndex === 4 ? 'Finish' : 'Save & Next'}
            primary={true}
            onTouchTap={() => this.handleNextAndSave(stepIndex)}
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

const mapStateToProps = (state) => ({
  stepIndex: state.matterform.stepIndex,
  loading: state.matterform.loading,
  finished: state.matterform.finished,
  existingClient: state.matterform.existingClient,
  existingCase: state.matterform.existingCase,
  useVendors: state.matterform.useVendors,
  existingVendor: state.matterform.existingVendor
});

const mapDepsToProps = (context) => ({
  Meteor: context.Meteor,
  Store: context.Store
});

const NewMatterWR = connect(mapStateToProps)(NewMatterImpl);
const NewMatter = useDeps(mapDepsToProps)(NewMatterWR);

export default NewMatter;