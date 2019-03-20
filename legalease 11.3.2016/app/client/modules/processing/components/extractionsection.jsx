import React,{ Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import MetaExtractionInProgress from './metaextractioninprogress.jsx';
import TextExtractionInProgress from './textextractioninprogress.jsx';

class ExtractionSection extends Component {
	render(){
		return(
			<Card style={{margin:10, padding:5}}>
				<CardHeader
					title="Extraction"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText 
					expandable={true}>
					<GridList
						cellHeight={180}
						cols={2}>
						<GridTile
						cols={1}
						rows={2}>
							<MetaExtractionInProgress/>
						</GridTile>
						<GridTile
						cols={1}
						rows={2}>
							<TextExtractionInProgress/>
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

export default ExtractionSection;