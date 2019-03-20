import { connect } from 'react-redux';
import UploadFileImpl from './../components/uploadfile.jsx';

const mapStateToProps = (state) => ({
	files: state.processing.uploadQueue
});

const UploadFile = connect(mapStateToProps)(UploadFileImpl);

export default UploadFile;