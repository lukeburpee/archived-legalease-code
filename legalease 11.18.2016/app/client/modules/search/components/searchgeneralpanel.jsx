import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import actions from './../actions'

class SearchGeneralPanelImpl extends Component {
	constructor(props){
		super(props);
		this.setSearchName = this.setSearchName.bind(this);
		this.setIncludedDocuments = this.setIncludedDocuments.bind(this);
		this.setRequiresRerun = this.setRequiresRerun.bind(this);
		this.setSearchIsCached = this.setSearchIsCached.bind(this);
		this.setAutoUpdate = this.setAutoUpdate.bind(this);
	}
	setSearchName(event){
		this.props.dispatch(actions.setSearchName(event.target.value));
	}
	setIncludedDocuments(event, index, value) {
		this.props.dispatch(actions.setSearchIncluded(value));
	}
	setRequiresRerun(event, isInputChecked){
		this.props.dispatch(actions.setIsRerunRequired(isInputChecked));
	}
	setSearchIsCached(event, isInputChecked){
		this.props.dispatch(actions.setSearchIsCached(isInputChecked));
	}
	setAutoUpdate(event, isInputChecked){
		this.props.dispatch(actions.setSearchIsAutoUpdate(isInputChecked));
	}
	render(){
		return (
			<Card
				expanded={true} 
				expandable={true}
				style={{width:'inherit', marginBottom:25}}>
				<CardHeader
					textStyle={{color:'white'}} 
					showExpandableButton={true}
					titleColor='white' 
					style={{backgroundColor:indigo900}} 
					title="General"/>
				<CardText>
				<GridList
					cols={2}
					rows={1}
					cellHeight={180}
					style={{width:'inherit', height:'inherit'}}>
					<GridTile
					cols={1}
					rows={1}>
					<List>
					<ListItem>
					<TextField hintText='Search Name' underlineShow={false} value={this.props.name} onChange={this.setSearchName}/>
					</ListItem>
					<ListItem>
					<SelectField floatingLabelText='Included Documents' value={this.props.includedDocuments} onChange={this.setIncludedDocuments}>
						<MenuItem value={'families'}>Include Families</MenuItem>
						<MenuItem value={'duplicates'}>Include Duplicates</MenuItem>
						<MenuItem value={'near_duplicates'}>Include Near Duplicates</MenuItem>
					</SelectField>
					</ListItem>
					<ListItem>
					<RaisedButton label='Scope'/>
					</ListItem>
					</List>
					</GridTile>
					<GridTile
					cols={1}
					rows={1}>
					<Checkbox label='Require Manual Rerun' labelPosition='left' onCheck={this.setRequiresRerun}/>
					<Checkbox label='Cache Search' labelPosition='left' onCheck={this.setSearchIsCached}/>
					<Checkbox label='Auto Update' labelPosition='left' onCheck={this.setAutoUpdate}/>
					</GridTile>
				</GridList>
				</CardText>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	name: state.search.name,
	includedDocuments: state.search.includedDocuments,
	scope: state.search.scope,
	rerunRequired: state.search.rerunRequired,
	autoUpdate: state.search.autoUpdate,
	isCached: state.search.isCached
});

const SearchGeneralPanel = connect(mapStateToProps)(SearchGeneralPanelImpl);

export default SearchGeneralPanel;