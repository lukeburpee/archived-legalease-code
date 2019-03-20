import React,{ Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import QueryBuilder from './querybuilder.jsx';

class SearchFilterPanel extends Component {
	render(){
		return (
			<Card 
				expanded={true}
				expandable={true}
				style={{ width:'inherit', marginBottom:25}}>
				<CardHeader
					showExpandableButton={true}
					titleColor='white' 
					style={{backgroundColor:indigo900}}
					title="Filter Search"/>
				<CardText expandable={true}>
					<QueryBuilder/>
				</CardText>
			</Card>
		);
	}
}

export default SearchFilterPanel