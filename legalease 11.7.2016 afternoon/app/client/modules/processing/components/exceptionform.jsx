import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class ExtractionFormImpl extends Component {
	constructor(props){
		super(props);
		this.toggleCollectPasswords = this.toggleCollectPasswords.bind(this);
		this.toggleLargeDoc = this.toggleLargeDoc.bind(this);
	}
	toggleCollectPasswords(event){
		return
	}
	toggleLargeDoc(event){
		return
	}
	render(){
		return(
			<div>
				<List>
					<ListItem key={1} primaryText="Collect Passwords" rightToggle={<Toggle onTouchTap={this.toggleCollectPasswords} toggled={this.props.extractAllMeta}/>}/>,
					<ListItem key={2} primaryText="Large Document" rightToggle={<Toggle onTouchTap={this.toggleLargeDoc} toggled={this.props.extractAllText}/>}/>
				</List>
			</div>
		);
	}
}

export default ExtractionFormImpl;