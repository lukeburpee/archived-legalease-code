import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class UploadFormImpl extends Component {
	constructor(props){
		super(props);
	}
	handleMatter = (event) => {
		this.props.dispatch(actions.setMatter(event.target.value));
	}
	handleDatabase = (event, index, value) => {
		this.props.dispatch(actions.setDatabase(value));
	}
	render(){
		return(
			<div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Matter" value={this.props.matter} underlineShow={false}/>
				</div>
				<div style={{marginBottom:10}}>
					<SelectField 
						hintText="Database" 
						value={this.props.database}
						onChange={this.handleDatabase} 
						underlineShow={false}>
						<MenuItem value={'default'} primaryText="Default"/>
						<MenuItem value={'external'} primaryText="External"/>
					</SelectField>
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
