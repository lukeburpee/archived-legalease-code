import React,{ Component, PropTypes } from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import InProgressFile from './../containers/inprogressfile.jsx';

class UploadWaitingTableImpl extends Component {
	constructor(props){
		super(props);
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			files: nextProps.files
		});
	}
	renderFiles(){
		let { files } = this.props;
		return files.map((file, i) => (
			<InProgressFile key={i} index={i} file={file}/>
		))
	}
	render(){
		return(
			<Table height={'calc(100% - 48%)'} style={{width:'inherit'}}>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
				{this.renderFiles()}
				</TableBody>
			</Table>
		);
	}
}

UploadWaitingTableImpl.propTypes = {
	index: PropTypes.number,
	files: PropTypes.any
}

export default UploadWaitingTableImpl;