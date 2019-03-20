import { connect } from 'react-redux';
import UploadInProgressTableImpl from './../components/uploadinprogresstable.jsx';


const mapStateToProps = (state) => ({
	files: state.processing.uploading
});

const UploadInProgressTable = connect(mapStateToProps)(UploadInProgressTableImpl);

export default UploadInProgressTable;