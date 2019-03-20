import React from 'react';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/content/clear';

import FilterSelect from './filesearch.filter.filterselect';
import OperatorSelect from './filesearch.filter.operatorselect';
import FilterValue from './filesearch.filter.filtervalue';

const Rule = ({filterlist, operatorlist, filter}) => (
	<Paper style={{paddingLeft:25, paddingRight:25}}>
		<div style={{float:'right'}}><IconButton><CancelIcon/></IconButton></div>
			<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
		<div>
			<FilterSelect filterlist={filterlist} value={filter.type}/>
		</div>
		<div>
			<OperatorSelect operatorlist={operatorlist} value={filter.operator}/>
		</div>
		<div>
			<FilterValue value={filter.value}/>
		</div>
		</div>
	</Paper>
);

export default Rule;