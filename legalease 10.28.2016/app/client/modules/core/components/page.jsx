import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { grey800 } from 'material-ui/styles/colors'
import LeftTrough from './lefttrough.jsx'
import RightTrough from './righttrough.jsx'
import Primary from './primary.jsx'
import { connect } from 'react-redux'

import core from './../actions'

class PageImpl extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		const width = window.innerWidth;
		const { dispatch, view, offset, leftTroughWidth, rightTroughWidth, leftTroughOpen, rightTroughOpen } = this.props;
		dispatch(core.setPrimaryWidth(width, offset, leftTroughWidth, rightTroughWidth, leftTroughOpen, rightTroughOpen));
		if (view === 'desktop'){
			dispatch(core.setPageDesktop());
		}
		if (view === 'tablet'){
			dispatch(core.setPageTablet());
		}
		if (view === 'mobile'){
			dispatch(core.setPageMobile());
		}
	}
	componentWillReceiveProps(nextProps){
		const width = window.innerWidth;
		const { view, dispatch, pageWidth, offset, leftTroughWidth, rightTroughWidth, leftTroughOpen, rightTroughOpen } = nextProps;
		dispatch(core.setPrimaryWidth(width, offset, leftTroughWidth, rightTroughWidth, leftTroughOpen, rightTroughOpen));
		if (view === 'desktop'){
			console.log('setting page desktop');
			dispatch(core.setPageDesktop());
		}
		if (view === 'tablet'){
			console.log('setting page tablet');
			dispatch(core.setPageTablet());
		}
		if (view === 'mobile'){
			console.log('setting page mobile');
			dispatch(core.setPageMobile());
		}
	}
	render() {
		const { offset, pageWidth, leftTroughWidth, rightTroughWidth, primaryWidth, leftTroughVisibility, rightTroughVisibility } = this.props;
		console.log(leftTroughVisibility, rightTroughVisibility);
		return (
			<div style={{height:'calc(100vh - 60px)', width:pageWidth, position:'fixed', top:'60px', left:offset}}>
				<div style={{zIndex:10, height: 'inherit', width:leftTroughWidth,  position:'absolute', top:0, left:0, bottom:'auto', right:'auto'}}>
					<LeftTrough/>
				</div>
				<div style={{zIndex:10, height: 'inherit', width:rightTroughWidth, position:'absolute', top:0, bottom:'auto', right:0}}>
					<RightTrough/>
				</div>
				<div style={{zIndex:15, height: 'inherit', width:primaryWidth, position:'absolute', top:0, bottom:'auto', left:leftTroughWidth, right:'auto'}}>
					<Primary content={this.props.content}/>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	view: state.core.layout.view,
	pageWidth: state.core.page.pageOuterWidth,
	offset: state.core.leftsidebar.leftSidebarWidth,
	primaryWidth: state.core.primary.primaryWidth,
	leftTroughOpen: state.core.lefttrough.leftTroughOpen,
	leftTroughVisibility: state.core.lefttrough.leftTroughVisibility,
	leftTroughWidth: state.core.lefttrough.leftTroughWidth,
	rightTroughOpen: state.core.righttrough.rightTroughOpen,
	rightTroughVisibility: state.core.righttrough.rightTroughVisibility,
	rightTroughWidth: state.core.righttrough.rightTroughWidth
});

export const Page = connect(mapStateToProps)(PageImpl);