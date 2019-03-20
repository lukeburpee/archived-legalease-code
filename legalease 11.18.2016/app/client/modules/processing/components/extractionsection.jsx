import React,{ Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import { GridList, GridTile } from 'material-ui/GridList';
import ExtractionForm from './../containers/extractionform.jsx';
import MetaExtractionInProgress from './metaextractioninprogress.jsx';
import TextExtractionInProgress from './textextractioninprogress.jsx';
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
					cellHeight={180}
					cols={2}>
				<GridTile
					style={{overflowY:'scroll'}}
					cols={1}
					rows={2}>
					<ExtractionForm/>
				</GridTile>
				<GridTile
					cols={1}
					rows={2}>
					<Card style={{height:'200px', marginBottom:10}} initiallyExpanded={true}>
						<CardHeader title="In Progress" actAsExpander={true} showExpandableButton={true}/>
						<CardText expandable={true}>
						<MetaExtractionInProgress/>
						</CardText>
					</Card>
					<Card style={{height:'200px', marginBottom:10}} initiallyExpanded={false}>
						<CardHeader title="Waiting" actAsExpander={true} showExpandableButton={true}/>
						<CardText expandable={true}>
						<TextExtractionInProgress/>
						</CardText>
					</Card>
				</GridTile>
				</GridList>
				</CardText>
				<CardActions>
					<FlatButton label="Meta Selected"/>
					<FlatButton label="Text Selected"/>
				</CardActions>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});

const ExtractionSection = connect(mapStateToProps)(ExtractionSectionImpl);

export default ExtractionSection;