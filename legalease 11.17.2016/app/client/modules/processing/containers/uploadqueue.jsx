import { connect } from 'react-redux';

import UploadQueueImpl from './../components/uploadqueue.jsx';

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue	
});

const UploadQueue = connect(mapStateToProps)(UploadQueueImpl);

export default UploadQueue;