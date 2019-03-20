import React, { Component, PropTypes } from 'react';
import UploadSection from './uploadsection.jsx';
import ExtractionSection from './extractionsection.jsx';
import ImagingSection from './imagingsection.jsx';
import AnalysisSection from './analysissection.jsx';
import ExceptionSection from './exceptionsection.jsx';

class Processing extends Component {
	render(){
		return(
			<div style={{height:'calc(100vh - 112px)', overflowY:'scroll'}}>
				<UploadSection/>
				<ExtractionSection/>
				<ImagingSection/>
				<AnalysisSection/>
				<ExceptionSection/>
			</div>
		);
	}
}

export default Processing;