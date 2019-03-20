import React,{ Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

class SearchColumnsPanel extends Component {
	render(){
		return (
			<Card 
				expanded={true}
				style={{width:'inherit', marginBottom:25}}
				expandable={true}>
				<CardHeader 
					showExpandableButton={true}
					titleColor='white' 
					style={{backgroundColor:indigo900}} 
					title="Columns"/>
				<CardText>
					Search Columns
				</CardText>
			</Card>
		);
	}
}

export default SearchColumnsPanel;