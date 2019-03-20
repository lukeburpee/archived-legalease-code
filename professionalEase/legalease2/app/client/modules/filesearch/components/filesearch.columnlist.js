import React from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

const FileSearchColumnList = ({name, selected, columns}) => (
	<Paper>
		<Subheader>{(name)?`${name}: `:null}</Subheader>
		<List style={{paddingLeft:(name)?25:0}}>
			{columns.map((col, i)=>(
				<ListItem key={i} primaryText={col.name}/>
			))}
		</List>
	</Paper>
);

export default FileSearchColumnList;