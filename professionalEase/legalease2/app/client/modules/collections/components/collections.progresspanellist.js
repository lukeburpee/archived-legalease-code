import React from 'react';

import ProgressPanel from './collections.progresspanel';

const ProgressPanelList = ({panels}) => (
	<div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
		{panels.map((panel, i)=>(
			<div style={{marginTop:20, marginBottom:20, marginLeft:(i > 0)?10:20, marginRight:10}}>
				<ProgressPanel 
					collection={panel.collection}
					name={panel.name} 
					progress={panel.progress} 
					count={panel.count} 
					isActive={panel.isActive} 
					isPaused={panel.isPaused}/>
			</div>
		))}
	</div>
);

export default ProgressPanelList;