import React,{ Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import IconButton from 'material-ui/IconButton';
import {connect} from 'react-redux';
import actions from './../actions';

class MattersListImpl extends Component {
	constructor(props){
		super(props);
	}
	handleMatterSelect(matter){
		this.props.dispatch(actions.setMatter(matter));
	}
	render(){
		return(
			<div>
			<Toolbar style={{height:36}}><ToolbarGroup><ToolbarTitle text="Matters"/></ToolbarGroup><ToolbarGroup lastChild={true}><IconButton><FilterIcon/></IconButton></ToolbarGroup></Toolbar>
			<List>
				<ListItem primaryText="Matter 1" onTouchTap={() => this.handleMatterSelect('matter_1')}/>
				<ListItem primaryText="Matter 2" onTouchTap={() => this.handleMatterSelect('matter_2')}/>
			</List>
			</div>
		);
	}
}

const MattersList = connect()(MattersListImpl);

export default MattersList;