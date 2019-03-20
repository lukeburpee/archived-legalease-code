import React, { Component } from 'react';
import { grey400 } from 'material-ui/styles/colors';
import GeneralPanel from './searchgeneralpanel.jsx';
import TextPanel from './searchtextpanel.jsx';
import FilterPanel from './searchfilterpanel.jsx';
import ColumnsPanel from './searchcolumnspanel.jsx';
import SortPanel from './searchsortpanel.jsx';
import QueryBuilder from './querybuilder.jsx';

class Search extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
	}
	render(){
		return (
			<div style={{width:'100%', height:'calc(100vh - 64px)', overflowY:'scroll', backgroundColor:grey400}}>
				<div style={{height:'inherit', paddingTop:25, paddingLeft:25, paddingRight:25}}>
					<GeneralPanel/>
					<TextPanel/>
					<FilterPanel/>
					<ColumnsPanel/>
					<SortPanel/>
				</div>
			</div>
		);
	}
}

export default Search;