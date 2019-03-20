import React,{ Component, PropTypes } from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import InProgressFile from './../containers/inprogressfile.jsx';

class UploadInProgressTableImpl extends Component {
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
			<Table height={'inherit'} style={{width:'inherit'}}>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
				{this.renderFiles()}
				</TableBody>
			</Table>
		);
	}
}

UploadInProgressTableImpl.propTypes = {
	index: PropTypes.number,
	files: PropTypes.any
}

export default UploadInProgressTableImpl;