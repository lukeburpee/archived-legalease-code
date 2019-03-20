import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';

import PrivateAppbarImpl from './../components/appbar.jsx';

const mapStateToProps = (state) => ({
	title: state.core.layout.title,
    view: state.core.layout.view,
	leftSidebarOpen: state.core.leftsidebar.leftSidebarOpen
})

const mapDepsToProps = (context) => ({
	Meteor: context.Meteor
});

export const PrivateAppbar = connect(mapStateToProps)(PrivateAppbarImpl)