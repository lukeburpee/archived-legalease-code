import React from 'react';
import Paper from 'material-ui/Paper';
import CombinatorSelect from './filesearch.filter.combinatorselect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Filter from './filesearch.filter.filter';
import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/content/clear';

const Group = ({filterlist, operatorlist, filter}) => (
	<Card>
		<CardHeader 
			showExpandableButton={true} 
			avatar={<IconButton><CancelIcon/></IconButton>}
			title={<div style={{position:'relative', top:10}}><CombinatorSelect value={filter.combinator}/></div>}/>
		<CardText style={{margin:5, padding:5}}>
			{filter.rules.map((rule, i)=>(
				<Filter filterlist={filterlist} operatorlist={operatorlist} filter={rule.filter}/>
			))}
			<div style={{display:'flex', justifyContent:'center'}}>
				<RaisedButton style={{textAlign:'center'}} primary={true} label="Add Rule"/>
			</div>
		</CardText>
		<CardActions>
			<RaisedButton primary={true} label="Add Group"/>
		</CardActions>
	</Card>
);

export default Group;