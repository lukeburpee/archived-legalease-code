import React,{ Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

class SearchTextPanel extends Component {
	render(){
		return (
			<Card
				expanded={true} 
				expandable={true}
				style={{width:'inherit', marginBottom:25}}>
				<CardHeader 
					showExpandableButton={true}
					titleColor='white' 
					style={{backgroundColor:indigo900, color:'white'}} 
					title="Text Search"/>
				<CardText>
					Text Settings
				</CardText>
			</Card>
		);
	}
}

export default SearchTextPanel;