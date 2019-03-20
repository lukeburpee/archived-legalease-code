import React from 'react';
import ViewerTabs from './viewertabs';
import AnnotationToolbar from './annotationtoolbar';

const ViewerMainContent = ({view, documents}) => (
	<div>
		<ViewerTabs view='pdf' documents={[{label:'doc 1', pdf:'pdf 1', html:'html 1', text:'text 1', size:'letter', zoom:100, device:null},{label:'doc 2', pdf:'pdf 2', html:'html 2', text:'text 2', size:'letter', zoom:100, device:null}]}/>
		<AnnotationToolbar view='pdf'/>
	</div>
);

export default ViewerMainContent;