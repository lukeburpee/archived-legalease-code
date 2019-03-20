import React,{ Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';

class InProgressFileImpl extends Component {
	constructor(props){
		super(props);
	}
	renderProgress(){
		return <LinearProgress mode="determinate" progress={0}/>
	}
	render(){
		const { index, file } = this.props;
		return(
			<TableRow key={index}>
				<TableRowColumn>{file.name}</TableRowColumn>
				<TableRowColumn>{file.size}</TableRowColumn>
				<TableRowColumn></TableRowColumn>
			</TableRow>
		);
	}
}

InProgressFileImpl.propTypes = {
	index: PropTypes.number,
	file: PropTypes.any,
	files: PropTypes.array
};

export default InProgressFileImpl;