import React from 'react';

import TimePicker from 'material-ui/TimePicker';

const ReportUpdateTime = ({time}) => (
	<TimePicker
		format='ampm'
		hintText='Update Time'
		value={time}
	/>
);

export default ReportUpdateTime;