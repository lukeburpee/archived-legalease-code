import React,{ Component } from 'react';

import FormElementList from './formelementlist';

const FormBuilderLeftContent = ({panel}) => (
	<div>
		{(()=> {
			switch(panel){
				case 'forms':
					return <div>forms</div>
				case 'sections':
					return <div>sections</div>
				case 'fields':
					return <div style={{height:'92vh', overflow:'scroll'}}><FormElementList/></div>
				default:
					return <FormElementList/>
				}
			})()}
	</div>
);

export default FormBuilderLeftContent;