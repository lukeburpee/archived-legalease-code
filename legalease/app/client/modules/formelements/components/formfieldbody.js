import React from 'react';
import {CardText} from 'material-ui/Card';

import FormEditorOptions from './formeditoroptions';

const FormFieldBody = ({open, type, value, options}) => (
	<div style={{width:'inherit'}}>
		{(open)?(type === 'checkboxlist'|| type === 'radiolist'|| type === 'select')?
			<CardText expandable={true}>
				<FormEditorOptions type={type} value={value} options={options}/>
			</CardText>: null : null
		}
	</div>
);

export default FormFieldBody;