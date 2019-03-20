import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { grey300 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import Documents from './documents.jsx';
import Batches from './batches.jsx';
import Reports from './reports.jsx';
import Highlights from './highlights.jsx';
import Forms from './forms.jsx';

import core from './../../core/actions';
import discovery from './../actions';

class Discovery extends Component {
	constructor(props){
		super(props);
		this.state={
			activePanel: 0
		};
	}
	componentDidMount(){
		if (this.state.activePanel === 0){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
		} else if (this.state.activePanel === 4){
			this.props.dispatch(core.leftTroughOpen('FORMFIELDS', 300));
			this.props.dispatch(core.rightTroughOpen('FORM', 500))
		}
		else {
			this.props.dispatch(core.leftTroughClose());
			this.props.dispatch(core.rightTroughClose());
		}
	}
	handleChange = (value) =>{
		this.setState({
			activePanel:value
		});
		if (value === 0){
			this.props.dispatch(core.leftTroughOpen('FILETREE', 300));
			this.props.dispatch(core.rightTroughClose());
			this.props.dispatch(discovery.setDiscoveryPanel(value));
		} else if (value === 4){
			this.props.dispatch(core.leftTroughOpen('FORMFIELDS', 300));
			this.props.dispatch(core.rightTroughOpen('FORM', 500));
			this.props.dispatch(discovery.setDiscoveryPanel(value));
		} else {
			this.props.dispatch(core.leftTroughClose());
			this.props.dispatch(core.rightTroughClose());
			this.props.dispatch(discovery.setDiscoveryPanel(value));
		}

	}
	render(){
		return (
			<Paper>
				<Paper style={{height:50, position:'relative', top:8, marginLeft:10, width:'30%'}}></Paper>
				<Paper style={{width:'inherit', height:'inherit', position:'relative', top:20, height:'calc(100vh - 130px)', leftMargin:10, rightMargin:10}}>
					<Tabs
						onChange={this.handleChange}
						value={this.state.activePanel}>
						<Tab label="Documents" value={0}/>
						<Tab label="Batches" value={1}/>
						<Tab label="Reports" value={2}/>
						<Tab label="Highlights" value={3}/>
						<Tab label="Forms" value={4}/>
					</Tabs>
					<SwipeableViews
						index={this.state.activePanel}
						onChangeIndex={this.handleChange}>
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
					</SwipeableViews>
				</Paper>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	leftTroughOpen: state.core.lefttrough.leftTroughOpen
});

export default connect(mapStateToProps)(Discovery);