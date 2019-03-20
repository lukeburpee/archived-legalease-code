import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ReportUpdateFrequency = ({frequency}) => (
	<SelectField floatingLabelText='Update Frequency' value={frequency}>
		<MenuItem primaryText='On Date' value='on-date'/>
		<MenuItem primaryText='Hourly' value='hourly'/>
		<MenuItem primaryText='Bi-Hourly' value='bi-hourly'/>
		<MenuItem primaryText='Daily' value='daily'/>
		<MenuItem primaryText='Bi-Daily' value='bi-daily'/>
		<MenuItem primaryText='Weekly' value='weekly'/>
		<MenuItem primaryText='Bi-Weekly' value='bi-weekly'/>
		<MenuItem primaryText='Monthly' value='monthly'/>
		<MenuItem primaryText='Quarterly' value='quarterly'/>
		<MenuItem primaryText='Semi-Annually' value='semi-annually'/>
		<MenuItem primaryText='Annually' value='annually'/>
	</SelectField>
);

export default ReportUpdateFrequency;