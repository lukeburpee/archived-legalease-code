import { connect } from 'react-redux'

import ImagingFormImpl from './../components/imagingform.jsx';

const mapStateToProps = (state) => ({
	imageAllPDF: state.processing.imageAllPDF,
	imageAllHTML: state.processing.imageAllHTML
});

const ImagingForm = connect(mapStateToProps)(ImagingFormImpl);

export default ImagingForm;