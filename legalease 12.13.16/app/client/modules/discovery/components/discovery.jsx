import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { grey300 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import Documents from './../containers/documentscontainer.jsx';
import Batches from './../containers/batchescontainer.jsx';
import Reports from './reports.jsx';
import Highlights from './highlights.jsx';
import Forms from './forms.jsx';
import Processing from './../../processing/components/processing.jsx';
import MatterSelect from './../containers/matterselect.jsx';
import { Search } from './../../search/components';
import core from './../../core/actions';
import discovery from './../actions';

import { useDeps } from 'mantra-core';

class DiscoveryImpl extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.dispatch(core.setTitle(<div style={{position:'relative', top:10}}><i>Discovery</i>&nbsp;>&nbsp;<MatterSelect/></div>));
		if (this.props.activePanel === 0){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
		}
		if (this.props.activePanel === 1){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
		} else if (this.props.activePanel === 5){
			this.props.dispatch(core.leftTroughOpen('FORMFIELDS', 300));
			this.props.dispatch(core.rightTroughOpen('FORM', 500))
		} else if (this.props.activePanel === 6){
			this.props.dispatch(core.leftTroughOpen('PROCESSINGQUEUE', 300));
			this.props.dispatch(core.rightTroughOpen('UPLOADRESULTS', 500));
		} else {
			this.props.dispatch(core.leftTroughClose());
			this.props.dispatch(core.rightTroughClose());
		}
	}
	componentWillUpdate(nextProps){
		return nextProps.activePanel !== this.props.activePanel
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.activePanel === 0){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
		}
		if (nextProps.activePanel === 1){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
		} else if (nextProps.activePanel === 5){
			this.props.dispatch(core.leftTroughOpen('FORMFIELDS', 300));
			this.props.dispatch(core.rightTroughOpen('FORM', 500))
		} else if (nextProps.activePanel === 6){
			this.props.dispatch(core.leftTroughOpen('PROCESSINGQUEUE', 300));
			this.props.dispatch(core.rightTroughOpen('UPLOADRESULTS', 500));
		} else {
			this.props.dispatch(core.leftTroughClose());
			this.props.dispatch(core.rightTroughClose());
		}
	}
	handleChange = (value) =>{
		this.setState({
			activePanel:value
		});
		if (value === 0) {
			FlowRouter.go('/discovery/search');
		} else if (value === 1){
			FlowRouter.go('/discovery/documents');
		} else if (value === 2){
			FlowRouter.go('/discovery/batches');
		} else if (value === 3){
			FlowRouter.go('/discovery/reports');
		} else if (value === 4){
			FlowRouter.go('/discovery/highlights');
		} else if (value === 5){
			FlowRouter.go('/discovery/forms');
		} else if (value === 6){
			FlowRouter.go('/discovery/processing');
		} else {
			FlowRouter.go('/discovery/documents');
		}

	}
	render(){
		let tabs = 	(this.props.activePanel === 0) ? null : 
					<Tabs
						style={{height:36}}
						onChange={this.handleChange}
						value={this.props.activePanel}>
						<Tab label="Documents" style={{height:36}} value={1}/>
						<Tab label="Batches" style={{height:36}} value={2}/>
						<Tab label="Reports" style={{height:36}} value={3}/>
						<Tab label="Highlights" style={{height:36}} value={4}/>
						<Tab label="Forms" style={{height:36}} value={5}/>
						<Tab label="Processing" style={{height:36}} value={6}/>
					</Tabs>
		return (
			<Paper>
				<Paper style={{width:'inherit', height:'inherit', position:'relative', height:'calc(100vh - 36px)', leftMargin:10, rightMargin:10}}>
					{tabs}
					<SwipeableViews
						index={this.props.activePanel}
						onChangeIndex={this.handleChange}>
						<div>
							<Search/>
						</div>
						<div>
							<Documents/>
						</div>
						<div>
							<Batches/>
						</div>
						<div>
							<Reports/>
						</div>
						<div>
							<Highlights/>
						</div>
						<div>
							<Forms/>
						</div>
						<div>
							<Processing/>
						</div>
					</SwipeableViews>
				</Paper>
			</Paper>
		);
	}
}
const mapDepsToProps = (context) => ({
	FlowRouter: context.FlowRouter
});

const mapStateToProps = (state) => ({
	leftTroughOpen: state.core.lefttrough.leftTroughOpen,
	search: state.search.current
});

const DiscoveryWRedux =  connect(mapStateToProps)(DiscoveryImpl);
const Discovery = useDeps(mapDepsToProps)(DiscoveryWRedux);
export default Discovery;