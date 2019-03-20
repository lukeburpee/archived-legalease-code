import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class ExtractionFormImpl extends Component {
	constructor(props){
		super(props);
		this.toggleExtractAllMeta = this.toggleExtractAllMeta.bind(this);
		this.toggleExtractAllText = this.toggleExtractAllText.bind(this);
	}
	toggleExtractAllMeta(event){
		this.props.dispatch(actions.extractAllMeta());
	}
	toggleExtractAllText(event){
		this.props.dispatch(actions.extractAllText());
	}
	render(){
		return(
			<div>
				<List>
					<ListItem key={1} primaryText="Extract All Meta" rightToggle={<Toggle onTouchTap={this.toggleExtractAllMeta} toggled={this.props.extractAllMeta}/>}/>,
					<ListItem key={2} primaryText="Extract All Text" rightToggle={<Toggle onTouchTap={this.toggleExtractAllText} toggled={this.props.extractAllText}/>}/>
				</List>
			</div>
		);
	}
}

export default ExtractionFormImpl;