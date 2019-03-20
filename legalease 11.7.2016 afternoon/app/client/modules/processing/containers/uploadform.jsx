import { connect } from 'react-redux'

import UploadFormImpl from './../components/uploadform.jsx';

const mapStateToProps = (state) => ({
	custodian: state.processing.custodian,
	collectionPrefix: state.processing.collectionPrefix,
});

const UploadForm = connect(mapStateToProps)(UploadFormImpl);

export default UploadForm;