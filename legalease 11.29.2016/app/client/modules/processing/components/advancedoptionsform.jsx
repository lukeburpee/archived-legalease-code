import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import ImagingForm from './../containers/imagingform.jsx';
import AnalysisForm from './../containers/analysisform.jsx';
import ExtractionForm from './../containers/extractionform.jsx';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class AdvancedOptionsForm extends Component {
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
			<div style={{marginBottom:10}}>
				<ExtractionForm/>
				<ImagingForm/>
				<AnalysisForm/>
			</div>
		);
	}
}

export default AdvancedOptionsForm;
