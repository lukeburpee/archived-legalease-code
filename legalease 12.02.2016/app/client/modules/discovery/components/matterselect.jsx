import React,{ Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MatterSelectImpl extends Component {
	constructor(props){
		super(props);
	}
	renderMatters(){
		const { matters } = this.props;
		return matters.map((matter, i) => (
			<MenuItem key={i} value={i} primaryText={matter.name}/>
		))
	}
	render(){
		return (
			<SelectField
				style={{position:'relative', top:5, width:150}} 
				hintText="Select Matter"
				labelStyle={{color: 'white', fontSize:24, fontStyle: 'italic'}}
				underlineStyle={{display:'none'}}
				value={this.props.activeMatter}>
				{this.renderMatters()}
			</SelectField>
		);
	}
}

export default MatterSelectImpl;