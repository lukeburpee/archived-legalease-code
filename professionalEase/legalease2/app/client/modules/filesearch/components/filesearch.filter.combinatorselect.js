import React from 'react';

import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton';

const CombinatorSelect = ({value}) => (
	<RadioButtonGroup valueSelected={value}>
		<RadioButton style={{display:'inline-block', width:80}} label="And" value={"and"}/>
		<RadioButton style={{display:'inline-block', width:80}} label="Or" value={"or"}/>
	</RadioButtonGroup>
);

export default CombinatorSelect;