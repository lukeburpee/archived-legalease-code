import React,{ Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import { GridList, GridTile } from 'material-ui/GridList';
import ImagingForm from './../containers/imagingform.jsx';
import PdfInProgress from './pdfinprogress.jsx';
import HtmlInProgress from './htmlinprogress.jsx';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import actions from './../actions';

class ImagingSectionImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Card 
				style={{margin:10, padding:5}}
				initiallyExpanded={false}>
				<CardHeader
					title="Imaging Section"
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
					<ImagingForm/>
				</GridTile>
				<GridTile
					cols={1}
					rows={2}>
					<Card style={{height:'200px', marginBottom:10}} initiallyExpanded={true}>
						<CardHeader title="In Progress" actAsExpander={true} showExpandableButton={true}/>
						<CardText expandable={true}>
						<PdfInProgress/>
						</CardText>
					</Card>
				</GridTile>
				</GridList>
				</CardText>
				<CardActions>
					<FlatButton label="Pdf Selected"/>
					<FlatButton label="Html Selected"/>
				</CardActions>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});

const mapDepsToProps = (context) => ({
	HTMLJobs: context.ConvertHTMLJobs,
	PDFJobs: context.ConvertPDFJobs
});

const ImagingSectionWRedux = connect(mapStateToProps)(ImagingSectionImpl);
const ImagingSection = useDeps(mapDepsToProps)(ImagingSectionWRedux);

export default ImagingSection;