import React from 'react';
import { ToolbarGroup } from 'material-ui/Toolbar';
import PdfTools from './pdftools';
import HtmlTools from './htmltools';
import TextTools from './texttools';

const ViewTools = ({view}) => (
	<ToolbarGroup>
		{(()=>{switch(view){
			case 'pdf':
				return <PdfTools/>
			case 'html':
				return <HtmlTools/>
			case 'text':
				return <TextTools/>
			default:
				return <PdfTools/>
		}})()}
	</ToolbarGroup>
);

export default ViewTools;