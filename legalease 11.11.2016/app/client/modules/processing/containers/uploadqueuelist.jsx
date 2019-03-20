import { connect } from 'react-redux';

import UploadQueueListImpl from './../components/uploadqueuelist.jsx';

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue	
});

const UploadQueueList = connect(mapStateToProps)(UploadQueueListImpl);

export default UploadQueueList;