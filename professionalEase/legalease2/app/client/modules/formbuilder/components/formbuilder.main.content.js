import React,{ Component } from 'react';
import FormEditor from './../../formelements/components/formeditor';
import {formSections} from './../../../config/testformsections';

const FormBuilderMainContent = ({name, sections}) => (
	<div style={{height:'calc(75vh)', overflowY:'scroll', padding:50}}>
	<FormEditor name={name} sections={formSections}/>
	</div>
);

export default FormBuilderMainContent;