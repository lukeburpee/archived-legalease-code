import { connect } from 'react-redux';
import ProcessingFileImpl from './../components/processingfile.jsx';

const mapStateToProps = (state) => ({
	files: state.processing.processingQueue
});

const ProcessingFile = connect(mapStateToProps)(ProcessingFileImpl);

export default ProcessingFile;