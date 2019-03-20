import React,{ Component } from 'react';

import FormEditorSectionList from './formeditorsectionlist';

const FormEditor = ({sections}) => (
	<div style={{height:'inherit',overflowY:'scroll'}}>
	<FormEditorSectionList sections={sections}/>
	</div>
);

export default FormEditor;