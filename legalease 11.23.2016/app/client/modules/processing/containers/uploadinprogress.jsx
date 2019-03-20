import { connect } from 'react-redux';
import UploadInProgressImpl from './../components/uploadinprogress.jsx';


const mapStateToProps = (state) => ({
	files: state.processing.uploading
});

const UploadInProgress = connect(mapStateToProps)(UploadInProgressImpl);

export default UploadInProgress;