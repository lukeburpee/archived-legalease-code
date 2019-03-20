import React from 'react';
import FormBuilderTabs from './formbuildertabs.jsx';

const FormBuilderLeft = () => (
	<div
		style={formBuilderLeftStyle}>
		<FormBuilderTabs/>
	</div>
);

export default FormBuilderLeft;

const formBuilderLeftStyle = {
	zIndex:2
}