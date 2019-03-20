import React from 'react';
import FormEditor from './../../../modules/formbuilder/components/formeditor';

const DiscoveryMainContent = ({page, id}) => (
	<div>
	{(()=>{switch(page){
		case 'documents':
		case 'formbuilder':
		default:
			<div>discovery page</div>
	}})()}
	</div>
);

export default DiscoveryMainContent;