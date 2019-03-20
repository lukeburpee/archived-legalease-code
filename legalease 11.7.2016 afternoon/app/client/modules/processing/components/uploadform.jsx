import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class UploadFormImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Matter" value={this.props.matter} underlineShow={false}/>
				</div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Database" value={this.props.database} underlineShow={false}/>
				</div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Custodian" value={this.props.custodian} underlineShow={false}/>
				</div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Collection Prefix" value={this.props.collectionPrefix} underlineShow={false}/>
				</div>
			</div>
		);
	}
}

export default UploadFormImpl;
