import { connect } from 'react-redux'

import AnalysisFormImpl from './../components/analysisform.jsx';

const mapStateToProps = (state) => ({
	tokenizeText: state.processing.tokenizeText,
	translate: state.processing.translate,
	allowLSA: state.processing.allowLSA,
	createCorpus: state.processing.createCorpus,
	semanticAnalysis: state.processing.semanticAnalysis
});

const AnalysisForm = connect(mapStateToProps)(AnalysisFormImpl);

export default AnalysisForm;