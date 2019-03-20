import { connect } from 'react-redux'

import ExtractionFormImpl from './../components/extractionform.jsx';

const mapStateToProps = (state) => ({
	extractAllMeta: state.processing.extractAllMeta,
	extractAllText: state.processing.extractAllText,
});

const ExtractionForm = connect(mapStateToProps)(ExtractionFormImpl);

export default ExtractionForm;