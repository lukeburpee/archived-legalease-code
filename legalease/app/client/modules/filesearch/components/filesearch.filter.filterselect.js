import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterSelect = ({filterlist, value}) => (
	<SelectField value={value}>
		{filterlist.map((filter, i)=>(
			<MenuItem key={i} primaryText={filter.label} value={filter.value}/>
		))}
	</SelectField>
);

export default FilterSelect;