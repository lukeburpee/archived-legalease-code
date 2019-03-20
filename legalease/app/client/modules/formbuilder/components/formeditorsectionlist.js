import React from 'react';
import FormEditorSection from './formeditorsection';


const FormEditorSectionList = ({sections}) => (
	<div>
	{(()=>sections.map((section, i)=>(
		<FormEditorSection key={i} label={section.label} editLabel={section.editLabel} open={section.open} fields={section.fields}/>
	)))()}
	</div>
);

export default FormEditorSectionList;