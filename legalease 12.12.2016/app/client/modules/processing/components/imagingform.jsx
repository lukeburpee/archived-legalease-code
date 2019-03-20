import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class ImagingFormImpl extends Component {
	constructor(props){
		super(props);
		this.toggleImageAllPdf = this.toggleImageAllPdf.bind(this);
		this.toggleImageAllHtml = this.toggleImageAllHtml.bind(this);
	}
	toggleImageAllPdf(event){
		this.props.dispatch(actions.imageAllPdf());
	}
	toggleImageAllHtml(event){
		this.props.dispatch(actions.imageAllHtml());
	}
	render(){
		return(
			<div>
				<List>
					<ListItem key={1} primaryText="Image PDF" rightToggle={<Toggle onToggle={this.toggleImageAllPdf} toggled={this.props.imageAllPDF}/>}/>,
					<ListItem key={2} primaryText="Image HTML" rightToggle={<Toggle onToggle={this.toggleImageAllHtml} toggled={this.props.imageAllHTML}/>}/>
				</List>
			</div>
		);
	}
}

export default ImagingFormImpl;