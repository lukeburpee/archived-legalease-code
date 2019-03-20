import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FileSearchFilterHeader from './filesearch.filter.header';
import RootFilter from './filesearch.filter.rootfilter';

const FileSearchFilters = ({open, filters, combinators, operators, groups}) => (
	<Card>
		<FileSearchFilterHeader open={open} groups={filters}/>
		<RootFilter 
			combinator='and'
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
		/>
	</Card>
);

export default FileSearchFilters;