import React,{ Component, PropTypes } from 'react';
import DataTables from 'material-ui-datatables';
import NewMatter from './newmatter.jsx';

class Matters extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<DataTables
				height={'auto'}
				showHeaderToolbar={true}
				showRowHover={true}
				deselectOnClickAway={false}
				columns={columns}
				data={data}
				total={10}
				/>

		);
	}
}

const columns = [];
const data = [];
export default Matters;