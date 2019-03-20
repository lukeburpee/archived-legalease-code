import React, { Component, PropTypes } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';

class AnalysisSection extends Component {
	render(){
		return(
			<Card style={{margin:10, padding:5}}>
				<CardHeader
					title="Analysis"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText expandable={true}>
					<GridList
						cellHeight={180}
						cols={2}>
						<GridTile
						cols={1}
						rows={2}>
						</GridTile>
						<GridTile
						cols={1}
						rows={2}>
						</GridTile>
					</GridList>
				</CardText>
			</Card>
		);
	}
}

export default AnalysisSection;