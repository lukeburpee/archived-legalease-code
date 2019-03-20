import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import UploadResultsToolbar from './uploadresultstoolbar.jsx';

class UploadResults extends Component {
	render(){
		return (
			<Paper>
				<UploadResultsToolbar/>
			</Paper>
		);
	}
}

export default UploadResults;
