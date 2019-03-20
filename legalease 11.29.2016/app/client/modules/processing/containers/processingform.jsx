import { connect } from 'react-redux'

import ProcessingFormImpl from './../components/uploadform.jsx';

const mapStateToProps = (state) => ({
	custodian: state.processing.custodian,
	collectionPrefix: state.processing.collectionPrefix,
	extractAllMeta: state.processing.extractAllMeta,
	extractAllText: state.processing.extractAllText,
	imageAllPDF: state.processing.imageAllPDF,
	imageAllHTML: state.processing.imageAllHTML,
	tokenizeText: state.processing.tokenizeText,
	translate: state.processing.translate,
	allowLSA: state.processing.allowLSA,
	createCorpus: state.processing.createCorpus,
	semanticAnalysis: state.processing.semanticAnalysis,
	collectPasswords: state.processing.collectPasswords,
	removeDuplicates: state.processing.removeDuplicates
});

const ProcessingForm = connect(mapStateToProps)(ProcessingFormImpl);

export default ProcessingForm;