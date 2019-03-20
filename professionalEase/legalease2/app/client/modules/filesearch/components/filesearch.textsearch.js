import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import FileSearchOptionsList from './filesearchoptionslist';

const FileSearchTextSearch = ({name, options, text}) => (
	<Card>
		<CardHeader title="Search Text"/>
		<CardText>
			<TextField floatingLabelText='Search Name' value={name}/>
			<FileSearchOptionsList options={options}/>
			<TextField floatingLabelText='Search Text' value={text} fullWidth={true} rows={4}/>
		</CardText>
	</Card>
);

export default FileSearchTextSearch;