import React,{ Component, PropTypes } from 'react';
import { indigo900 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import actions from './../actions';

class ViewerTypeToolbarImpl extends Component {
	constructor(props){
		super(props);
		this.selectViewerType = this.selectViewerType.bind(this);
	}
	selectViewerType(event, value){
		this.props.dispatch(actions.setViewerType(value));
	}
	render(){
		return(
			<Toolbar style={{backgroundColor:indigo900, width: 'inherit', position:'absolute', top:0, bottom:'auto', height:'50px', padding:'10px'}}>
				<ToolbarGroup>
					<RadioButtonGroup onChange={this.selectViewerType} style={{ display:'flex', flexDirection:'row', maxWidth:100, marginLeft:20, marginTop:10}} labelPosition="right" name="viewerSelect" defaultSelected="htmlview">
						<RadioButton
							labelStyle={{color:'white'}}
							value="htmlview"
							label="Viewer"/>
						<RadioButton
							labelStyle={{color:'white'}}
							value="textview"
							label="Text"/>
						<RadioButton
							labelStyle={{color:'white'}}
							value="pdfview"
							label="Image"/>
						<RadioButton
							labelStyle={{color:'white'}}
							value="producedview"
							label="Produced"/>
					</RadioButtonGroup>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

const mapStateToProps = (state) => ({
	viewerType: state.viewer.viewerType
});

const ViewerTypeToolbar = connect(mapStateToProps)(ViewerTypeToolbarImpl);

export default ViewerTypeToolbar;