import { connect } from 'react-redux';
import InProgressFileImpl from './../components/inprogressfile.jsx';

const mapStateToProps = (state) => ({
	files: state.processing.uploading
});

const InProgressFile = connect(mapStateToProps)(InProgressFileImpl);

export default InProgressFile;