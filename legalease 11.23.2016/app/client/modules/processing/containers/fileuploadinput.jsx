import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { connect } from 'react-redux';

import FileUploadInputImpl from './../components/fileuploadinput.jsx';

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});
const mapDepsToProps = (context, actions) => ({
	context: () => context
});

const FileUploadInputWRedux =  connect(mapStateToProps)(FileUploadInputImpl);
const FileUploadInput = useDeps(mapDepsToProps)(FileUploadInputWRedux);
export default FileUploadInput;