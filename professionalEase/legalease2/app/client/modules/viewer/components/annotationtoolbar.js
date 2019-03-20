import React from 'react';
import Layer from './../../interface/components/layer';
import IconButton from 'material-ui/IconButton';
import HighlightIcon from 'material-ui/svg-icons/editor/highlight';
import RedactionIcon from 'material-ui/svg-icons/editor/format-shapes';
import LinkIcon from 'material-ui/svg-icons/editor/insert-link';
import VisibilityIcon from 'material-ui/svg-icons/image/texture';

const AnnotationToolbar = ({view}) => (
	<div>{(view === 'pdf')?
		<Layer
			id="annotation-toolbar"
			width={'4vw'}
			height={'40vh'}
			position='absolute'
			zIndex={2}
			top={'40vh'}
			bottom={'auto'}
			left={0}
			right={'auto'}
		>
		<IconButton><HighlightIcon/></IconButton>
		<IconButton><RedactionIcon/></IconButton>
		<IconButton><VisibilityIcon/></IconButton>
		<IconButton><LinkIcon/></IconButton>
		</Layer>:null}
	</div>
);

export default AnnotationToolbar;