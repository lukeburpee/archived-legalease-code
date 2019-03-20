import React,{ Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import { GridList, GridTile } from 'material-ui/GridList';
import ExtractionInProgress from './extractioninprogress.jsx';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import actions from './../actions';

class ExtractionSectionImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Card 
				style={{margin:10, padding:5}}
				initiallyExpanded={false}>
				<CardHeader
					title="Extraction Section"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText 
					expandable={true}>
				<GridList
					cellHeight={150}
					cols={2}>
				<GridTile
					cols={2}
					rows={2}>
					<ExtractionInProgress/>
				</GridTile>
				</GridList>
				</CardText>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	processingQueue: state.processing.processingQueue
});

const ExtractionSection = connect(mapStateToProps)(ExtractionSectionImpl);

export default ExtractionSection;