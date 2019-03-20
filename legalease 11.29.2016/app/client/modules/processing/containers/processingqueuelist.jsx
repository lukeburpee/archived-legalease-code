import { connect } from 'react-redux';

import ProcessingQueueListImpl from './../components/processingqueuelist.jsx';

const mapStateToProps = (state) => ({
	processingQueue: state.processing.processingQueue	
});

const ProcessingQueueList = connect(mapStateToProps)(ProcessingQueueListImpl);

export default ProcessingQueueList;