import { connect } from 'react-redux';

import ProcessingQueueImpl from './../components/processingqueue.jsx';

const mapStateToProps = (state) => ({
	processingQueue: state.processing.processingQueue	
});

const ProcessingQueue = connect(mapStateToProps)(ProcessingQueueImpl);

export default ProcessingQueue;