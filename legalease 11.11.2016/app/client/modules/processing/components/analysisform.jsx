import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class AnalysisFormImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<List>
					<ListItem key={8} primaryText="Tokenize Text" rightToggle={<Toggle toggled={this.props.tokenizeText}/>}/>,
					<ListItem key={9} primaryText="Translate" rightToggle={<Toggle toggled={this.props.translate}/>}/>,
					<ListItem key={10} primaryText="Allow LSA" rightToggle={<Toggle toggled={this.props.allowLSA}/>}/>,
					<ListItem key={11} primaryText="Create Corpus" rightToggle={<Toggle toggled={this.props.createCorpus}/>}/>,
					<ListItem key={12} primaryText="Sentiment Analysis" rightToggle={<Toggle toggled={this.props.smeanticAnalysis}/>}/>
				</List>
			</div>
		);
	}
}

export default AnalysisFormImpl;