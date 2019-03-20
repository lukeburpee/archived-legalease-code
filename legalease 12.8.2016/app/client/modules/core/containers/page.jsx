import { connect } from 'react-redux'

import PageImpl from './../components/page.jsx';

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