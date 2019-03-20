import React from 'react';

const ProgressDescription = ({size, progress, count}) => (
	<div>
		<div style={{marginLeft:(count > 9999)?5:(count > 999)?3:0, fontSize:(count > 10000)?size/5:(count > 1000)?size/4:(count > 100)?size/3.4:(count > 10)?size/3.2:size/3}}>{`${progress}%`}</div>
		{
			(count > 9999)?<div style={{fontSize:size/8, textAlign:'center'}}><div>of</div><div>{count} files</div></div>:
			(count > 999)?<div style={{fontSize:size/8, textAlign:'center'}}><div></div>of<div>{count} files</div></div>:
			(count > 99)?<div style={{fontSize:size/6, textAlign:'center', marginLeft:-7}}>of {count} files</div>:
			<div style={{fontSize:size/6, textAlign:'center', marginLeft:-5}}>of {count} files</div>
		}
	</div>
);

export default ProgressDescription;