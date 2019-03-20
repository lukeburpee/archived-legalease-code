import React from 'react';
import IconButton from 'material-ui/IconButton';

const PublicIconButton = ({size, path, link}) => (
	<IconButton style={{width:size, height:size, padding:(size < 72)?size*4/9:size/4}} iconStyle={{width:size/2, height:size/2}}>
		<object type="image/svg+xml" data={`${path}`} />
	</IconButton>
);

export default PublicIconButton;