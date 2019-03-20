import React from 'react';

const PublicIcon = ({size, path, link}) => (
	<div>
		<object size={{width:size, height:size}} type="image/svg+xml" data={`${path}`} />
	</div>
);

export default PublicIcon;