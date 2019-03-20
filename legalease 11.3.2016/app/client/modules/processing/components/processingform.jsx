import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import actions from './../actions';

class ProcessingFormImpl extends Component {
	constructor(props){
		super(props);
		this.toggleExtractAllMeta = this.toggleExtractAllMeta.bind(this);
		this.toggleExtractAllText = this.toggleExtractAllText.bind(this);
		this.toggleImageAllPdf = this.toggleImageAllPdf.bind(this);
		this.toggleImageAllHtml = this.toggleImageAllHtml.bind(this);
	}
	toggleExtractAllMeta(event){
		this.props.dispatch(actions.extractAllMeta());
	}
	toggleExtractAllText(event){
		this.props.dispatch(actions.extractAllText());
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
				<div style={{marginBottom:10}}>
					<TextField hintText="Custodian" value={this.props.custodian} underlineShow={false}/>
				</div>
				<div style={{marginBottom:10}}>
					<TextField hintText="Collection Prefix" value={this.props.collectionPrefix} underlineShow={false}/>
				</div>
				<List>
				<ListItem
					key={1}
					primaryText="Extraction"
					nestedItems={[
						<ListItem key={2} primaryText="Extract All Meta" rightToggle={<Toggle onTouchTap={this.toggleExtractAllMeta} toggled={this.props.extractAllMeta}/>}/>,
						<ListItem key={3} primaryText="Extract All Text" rightToggle={<Toggle onTouchTap={this.toggleExtractAllText} toggled={this.props.extractAllText}/>}/>
					]}/>
				<ListItem
					key={4}
					primaryText="Imaging"
					nestedItems={[
						<ListItem key={5} primaryText="Cache PDF" rightToggle={<Toggle onToggle={this.toggleImageAllPdf} toggled={this.props.imageAllPDF}/>}/>,
						<ListItem key={6} primaryText="Cache HTML" rightToggle={<Toggle onToggle={this.toggleImageAllHtml} toggled={this.props.imageAllHTML}/>}/>
					]}/>
				<ListItem
					key={7}
					primaryText="Analysis"
					nestedItems={[
						<ListItem key={8} primaryText="Tokenize Text" rightToggle={<Toggle toggled={this.props.tokenizeText}/>}/>,
						<ListItem key={9} primaryText="Translate" rightToggle={<Toggle toggled={this.props.translate}/>}/>,
						<ListItem key={10} primaryText="Allow LSA" rightToggle={<Toggle toggled={this.props.allowLSA}/>}/>,
						<ListItem key={11} primaryText="Create Corpus" rightToggle={<Toggle toggled={this.props.createCorpus}/>}/>,
						<ListItem key={12} primaryText="Sentiment Analysis" rightToggle={<Toggle toggled={this.props.smeanticAnalysis}/>}/>
					]}/>
				<ListItem
					key={13}
					primaryText="Exceptions"
					nestedItems={[
						<ListItem key={14} primaryText="Collect Passwords" rightToggle={<Toggle toggled={this.props.collectPasswords}/>}/>,
						<ListItem key={15} primaryText="Remove Duplicates" rightToggle={<Toggle toggled={this.props.removeDuplicates}/>}/>
					]}/>
				</List>
			</div>
		);
	}
}

export default ProcessingFormImpl;
