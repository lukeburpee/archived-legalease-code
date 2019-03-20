import React from 'react';

import {Card,CardHeader,CardText,CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/content/clear';
import Filter from './filesearch.filter.filter';
import CombinatorSelect from './filesearch.filter.combinatorselect';

const RootFilter = ({combinator, filterlist, operatorlist, filters}) => (
	<Card>
		<CardHeader 
			showExpandableButton={true} 
			title="Search Filters: "/>
		<CardText style={{padding:10}}>
			<div style={{justifyContent:'center'}}>
				<CombinatorSelect value={combinator}/>
			</div>
			{(filters)?(()=>filters.map((filter, i)=>(
				<Filter key={i} filterlist={filterlist} operatorlist={operatorlist} filter={filter}/>
			)))():null}
			<div style={{display:'flex', justifyContent:'center'}}>
			<RaisedButton style={{textAlign:'middle'}} primary={true} label="Add Rule"/>
			</div>
		</CardText>
		<CardActions>
			<RaisedButton primary={true} label="Add Group"/>
		</CardActions>
	</Card>
);

export default RootFilter;