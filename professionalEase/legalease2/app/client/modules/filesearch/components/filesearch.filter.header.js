import React from 'react';
import { CardHeader, CardTitle } from 'material-ui/Card';
import ChipInput from 'material-ui-chip-input';
import Subheader from 'material-ui/Subheader';

const FileSearchFiltersHeader = ({open, filters}) => (
	<CardHeader>
		<CardTitle title={(open)?<Subheader>Search Filters</Subheader>:<ChipInput value={filters}/>}/>
	</CardHeader>
);

export default FileSearchFiltersHeader;