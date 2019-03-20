import React,{ Component } from 'react';

import FormEditorSectionList from './formeditorsectionlist';

const FormEditor = ({sections}) => (
	<FormEditorSectionList sections={sections}/>
);

export default FormEditor;