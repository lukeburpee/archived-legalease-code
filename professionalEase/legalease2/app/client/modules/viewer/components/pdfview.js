import React from 'react';

import DocPage from './docpage';

const PdfView = ({size, device, zoom, landscape, annotations, pdf}) => (
	<DocPage size={size} device={device} zoom={zoom} landscape={landscape} annotations={annotations}>{pdf}</DocPage>
);

export default PdfView;