import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

class AnalysisInProgressImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			imagingJobs: this.props.analysisJobs
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			analysisJobs: nextProps.analysisJobs
		});
	}
	renderAnalysisJobs(){
		return this.props.analysisJobs.map((job, i) => (
			<TableRow>
				<TableColumn>
					{job.data.filename}
				</TableColumn>
				<TableColumn>
					{job.type}
				</TableColumn>
				<TableColumn>
					{job.status}
				</TableColumn>
				<TableColumn>
					{job.progress}
				</TableColumn>
			</TableRow>
		));
	}
	render(){
		return(
			<Paper>
			<Table height={'inherit'} style={{width:'inherit'}}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>
							Name
						</TableHeaderColumn>
						<TableHeaderColumn>
							Type
						</TableHeaderColumn>
						<TableHeaderColumn>
							Status
						</TableHeaderColumn>
						<TableHeaderColumn>
							Complete
						</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
					{this.renderAnalysisJobs()}
				</TableBody>
			</Table>
			</Paper>
		);
	}
}

AnalysisInProgressImpl.propTypes = {
	imagingJobs: PropTypes.array
};

export const composer = ({context}, onData) => {
	const { Meteor, DiscoveryJobs } = context();
	if (Meteor.subscribe('all.analysis.jobs').ready()){
		const analysisJobs = DiscoveryJobs.find().fetch();
		onData(null, { analysisJobs });
	}
}

export default composeAll(
	composeWithTracker(composer),
	useDeps())(AnalysisInProgressImpl);