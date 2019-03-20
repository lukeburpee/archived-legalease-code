import React, { Component } from 'react';
import QueryBuilder from './querybuilder.jsx';

class Search extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
	}
	render(){
		return (
			<div>
				<QueryBuilder/>
			</div>
		);
	}
}

export default Search;