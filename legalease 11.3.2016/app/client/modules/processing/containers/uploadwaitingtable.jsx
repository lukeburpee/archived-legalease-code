import { connect } from 'react-redux';
import UploadWaitingTableImpl from './../components/uploadwaitingtable.jsx';


const mapStateToProps = (state) => ({
	files: state.processing.waiting
});

const UploadWaitingTable = connect(mapStateToProps)(UploadWaitingTableImpl);

export default UploadWaitingTable;