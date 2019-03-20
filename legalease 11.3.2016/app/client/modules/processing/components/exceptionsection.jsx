import React,{ Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import PasswordInProgress from './passwordinprogress.jsx';
import DuplicateProcessing from './duplicateprocessing.jsx';

class ExceptionSection extends Component {
	render(){
		return(
			<Card style={{margin:10, padding:5}}>
				<CardHeader
					title="Exceptions"
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
							<PasswordInProgress/>
						</GridTile>
						<GridTile
							cols={1}
							rows={2}>
							<DuplicateProcessing/>
						</GridTile>
					</GridList>
				</CardText>
			</Card>
		);
	}
}

export default ExceptionSection;