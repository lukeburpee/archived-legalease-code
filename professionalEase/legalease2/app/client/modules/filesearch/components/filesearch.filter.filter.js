import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/content/clear';
import Group from './filesearch.filter.group';
import Rule from './filesearch.filter.rule';

const Filter = ({filterlist, operatorlist, filter}) => (
	<div style={{margin:5, padding:5}}>
		{(filter.rules)?<Group filterlist={filterlist} operatorlist={operatorlist} filter={filter}/>:<Rule filterlist={filterlist} operatorlist={operatorlist} filter={filter}/>}
	</div>
);

export default Filter;