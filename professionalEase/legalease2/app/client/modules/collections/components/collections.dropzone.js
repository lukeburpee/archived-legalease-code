import React from 'react';
import IconButton from 'material-ui/IconButton';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';

const CollectionDropzone = ({files}) => (
	<div style={{marginLeft:'auto', marginRight:'auto', marginTop:20, marginBottom:20, width:'inherit', height:'inherit'}}>
		<div style={{margin:20, borderStyle:'dashed'}}>
			<IconButton style={{width:180, height:180, padding:45}} iconStyle={{width:90, height:90}}><UploadIcon/></IconButton>
		</div>
	</div>
);

export default CollectionDropzone; 