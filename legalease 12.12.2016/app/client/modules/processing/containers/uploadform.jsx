import { connect } from 'react-redux'

import UploadFormImpl from './../components/uploadform.jsx';

const mapStateToProps = (state) => ({
	matter: state.processing.matter,
	custodian: state.processing.custodian,
	collectionPrefix: state.processing.collectionPrefix,
	database: state.processing.database
});

const UploadForm = connect(mapStateToProps)(UploadFormImpl);

export default UploadForm;