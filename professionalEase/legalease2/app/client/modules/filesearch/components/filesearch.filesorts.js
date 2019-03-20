import React from 'react';

import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const FileSearchSort = ({fields, sorts}) => (
	<Card>
		<CardHeader title='Search Sort'/>
		<CardText>
			<List>
			{sorts.map((sort, i)=> (
				<ListItem key={i}>
					<Paper style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
						<div style={{width:'50%', paddingLeft:20}}>
							<SelectField floatingLabelText='Direction' value={sort.direction}>
								<MenuItem primaryText='Ascending' value='ascending'/>
								<MenuItem primaryText='Descending' value='descending'/>
							</SelectField>
						</div>
						<div style={{width:'50%', paddingLeft:20}}>
							<SelectField floatingLabelText='Field' value={sort.field}>
								{fields.map((field, j)=>(
									<MenuItem key={j} primaryText={field.label} value={field.value}/>
								))}
							</SelectField>
						</div>
					</Paper>
				</ListItem>
			))}
			</List>
			<CardActions>
				<RaisedButton primary={true} label='Add Sort Field'/>
			</CardActions>
		</CardText>
	</Card>
);

export default FileSearchSort;