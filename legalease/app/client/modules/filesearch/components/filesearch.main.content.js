import React from 'react';
import Text from './filesearch.textsearch';
import RootFilter from './filesearch.filter.rootfilter';
import Columns from './filesearch.searchcolumns';
import Sorts from './filesearch.filesorts';

const FileSearchMainContent = ({filterlist, operatorlist, search}) => (
	<div>
		<div style={{margin:10}}>
			<Text name={search.name} text={search.text} options={search.options}/>
		</div>
		<div style={{margin:10}}>
			<RootFilter combinator={search.root.combinator} filterlist={filterlist} operatorlist={operatorlist} filters={search.filters}/>
		</div>
		<div style={{margin:10}}>
			<Columns include={search.included} exclude={search.excluded}/>
		</div>
		<div style={{margin:10}}>
			<Sorts fields={filterlist} sorts={search.sorts}/>
		</div>
	</div>
);

export default FileSearchMainContent;