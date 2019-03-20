import React,{ Component, PropTypes } from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import UploadInProgressFile from './../containers/uploadinprogressfile.jsx';

class UploadInProgressImpl extends Component {
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
			<UploadInProgressFile key={i} index={i} file={file}/>
		))
	}
	render(){
		return(
			<Table height={'inherit'} style={{width:'100%'}} selectable={true} multiSelectable={true}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>
							Name
						</TableHeaderColumn>
						<TableHeaderColumn>
							Status
						</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
				{this.renderFiles()}
				</TableBody>
			</Table>
		);
	}
}

UploadInProgressImpl.propTypes = {
	index: PropTypes.number,
	files: PropTypes.any
}

export default UploadInProgressImpl;