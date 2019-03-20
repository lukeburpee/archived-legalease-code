import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const FileSearchOptionsList = ({options}) => (
	<div style={{display:'flex', flexDirection:'row', width:'inherit'}}>
		<Checkbox label='Families' style={{width:150}} checked={options.families}/>
		<Checkbox label='Thread Group' style={{width:150}} checked={options.threadGroup}/>
		<Checkbox label='Duplicates' style={{width:150}} checked={options.duplicates}/>
		<Checkbox label='Near Duplicates' style={{width:175}} checked={options.nearDuplicates}/>
	</div>
);

export default FileSearchOptionsList;