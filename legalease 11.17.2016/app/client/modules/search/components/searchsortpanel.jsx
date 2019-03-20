import React,{ Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'


class SearchSortPanel extends Component {
	render(){
		return (
			<Card 
				expanded={true}
				title="Sort"
				style={{width:'inherit'}}
				expandable={true}>
				<CardHeader
					showExpandableButton={true}
					titleColor='white'  
					style={{backgroundColor:indigo900}} 
					title="Sort"/>
				<CardText>
					Sort Settings
				</CardText>
				</Card>
		);
	}
}

export default SearchSortPanel;