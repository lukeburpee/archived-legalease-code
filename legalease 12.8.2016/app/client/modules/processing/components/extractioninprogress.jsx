import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

class ExtractionInProgressImpl extends Component {
	constructor(props){
		super(props);
	}
	renderExtractionJobs(){
		return this.props.extractionJobs.map((job, i) => (
			<TableRow>
				<TableRowColumn>
					{job.data.name}
				</TableRowColumn>
				<TableRowColumn>
					{job.type}
				</TableRowColumn>
				<TableRowColumn>
					{job.status}
				</TableRowColumn>
				<TableRowColumn>
					{job.progress}
				</TableRowColumn>
			</TableRow>
		));
	}
	render(){
		return(
			<Paper style={{margin:10}}>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>
								File
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
					<TableBody>
						{(this.props.extractionJobs) ? this.renderExtractionJobs() : <TableRow><TableColumn>No Current Extraction Jobs</TableColumn></TableRow>}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

ExtractionInProgressImpl.propTypes = {
	extractionJobs: PropTypes.array	
};

export const composer = ({context}, onData) => {
	const { Meteor, DiscoveryJobs } = context();
	if (Meteor.subscribe('all.extraction.jobs').ready()){
		const extractionJobs = DiscoveryJobs.find().fetch();
		onData(null, { extractionJobs });
	}
}

export default composeAll(
	composeWithTracker(composer),
	useDeps())(ExtractionInProgressImpl);