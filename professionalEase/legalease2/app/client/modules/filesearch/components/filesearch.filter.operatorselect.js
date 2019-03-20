import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const OperatorSelect = ({operatorlist, value}) => (
	<SelectField style={{width:'inherit'}} value={value}>
		{operatorlist.map((operator, i)=>(
			<MenuItem primaryText={operator.label} value={operator.value}/>
		))}
	</SelectField>
);

export default OperatorSelect;