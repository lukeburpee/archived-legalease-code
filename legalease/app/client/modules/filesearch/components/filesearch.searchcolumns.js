import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DownIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import LeftIcon from 'material-ui/svg-icons/navigation/arrow-back';
import RightIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import BothIcon from 'material-ui/svg-icons/action/compare-arrows';
import FileSearchColumnList from './filesearch.columnlist';

const FileSearchColumns = ({include, exclude, includeSelected, excludeSelected}) => (
	<Card>
		<CardHeader title='Search Columns'/>
		<CardText>
			<div style={{display:'flex', flexDirection:'row'}}>
				<div style={{display:'flex', width:'5%', flexDirection:'column', justifyContent:'center'}}>
					<div>
						<FlatButton icon={<UpIcon/>}/>
					</div>
					<div>
						<FlatButton icon={<DownIcon/>}/>
					</div>
				</div>
				<div style={{width:'40%', padding:10}}>
					<FileSearchColumnList name='Include' selected={includeSelected} columns={exclude}/>
				</div>
				<div style={{width:'10%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
					<FlatButton icon={(!includeSelected && !excludeSelected)?<BothIcon/>:(includeSelected)?<RightIcon/>:<LeftIcon/>}/>
				</div>
				<div style={{width:'40%', padding:10}}>
					<FileSearchColumnList name='Exclude' selected={excludeSelected} columns={include}/>
				</div>
				<div style={{display:'flex', width:'5%', flexDirection:'column', justifyContent:'center'}}>
					<div>
						<FlatButton icon={<UpIcon/>}/>
					</div>
					<div>
						<FlatButton icon={<DownIcon/>}/>
					</div>
				</div>
			</div>
		</CardText>
	</Card>
);

export default FileSearchColumns;