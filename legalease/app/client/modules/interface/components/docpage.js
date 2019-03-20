import React,{ Component } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Stage, Layer } from 'react-konva'; 

class DocPage extends Component {
	constructor(props){
		super(props);
	}
	types = () => {
		const types = [
			{size:'letter', width:8.5, height:11},
			{size:'legal', width:8.5, height:14},
			{size:'statement', width:5.5, height:8.5},
			{size:'executive', width:7.25, height:10.5},
			{size:'a3', width:11.69, height:16.54},
			{size:'a4', width:8.27, height:11.69},
			{size:'a5', width:5.83, height:8.27},
			{size:'b4_jis', width:10.12, height:14.33},
			{size:'b5_jis', width:7.17, height:10.12},
			{size:'11x17', width:11, height:17},
			{size:'envelope_10', width:4.12, height:9.5},
			{size:'envelope_dl', width:4.33, height:8.66},
			{size:'envelope_c5', width:6.38, height:9.02},
			{size:'envelope_b5', width:6.93, height:9.84},
			{size:'envelope_monarch', width:3.88, height:7.5},
			{size:'japanese_postcard', width:3.94, height:5.83},
			{size:'a6', width:4.13, height:5.83},
			{size:'double_japan_postcard_rotated', width:5.83, height:7.87},
			{size:'16k', width:7.75, height:10.75},
			{size:'executive_jis', width:8.5, height:12.99},
			{size:'8k', width:10.75, height:15.5},
			{size:'oficio_8.5x13', width:8.5, height:13},
			{size:'12x18', width:12, height:18},
			{size:'8k_273x394_mm', width:10.75, height:15.5},
			{size:'16k_197x273_mm', width:7.75, height:10.75}
		];
		return types;
	}	
	setSize = (size, device, zoom) => {
		if (!device){
			return size*60*100/zoom;
		}
		return size*device*100/zoom;
	}
	setDocPageLayout = (size, device, zoom, landscape) => {
		const types = this.types();
		const index = _.findIndex(types, {size:size});
		return types[index];
	}
	render(){
		const { size, device, zoom, landscape, annotations, children } = this.props;
		const layout = this.setDocPageLayout(size, device, zoom, landscape);
		const width = this.setSize(layout.width, device, zoom);
		const height = this.setSize(layout.height, device, zoom);
		return(
			<Paper
				style={{position:'relative', width:width, height:height}}>
				<div style={{position:'absolute'}}>
					<Stage width={width} height={height}>
						<Layer>
							{(annotations)?this.props.annotations:null}
						</Layer>
					</Stage>
				</div>
				<div style={{position:'absolute'}}>
				{children}
				</div>
			</Paper>
		);
	}
}

export default DocPage;