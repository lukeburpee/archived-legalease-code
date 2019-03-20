import React from 'react';

import ReportUpdateFrequency from './reportupdatefrequency';
import ReportUpdateTime from './reportupdatetime';

const ReportScheduleForm = ({frequency, time}) => (
	<div style={{padding:25}}>
		<ReportUpdateFrequency frequency={frequency}/>
		<ReportUpdateTime time={time}/>
	</div>
);

export default ReportScheduleForm;