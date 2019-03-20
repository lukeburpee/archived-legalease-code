import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';

import PrivateAppbarImpl from './../components/appbar.jsx';

const mapStateToProps = (state) => ({
    view: state.core.layout.view,
	leftSidebarOpen: state.core.leftsidebar.leftSidebarOpen
})

export const PrivateAppbar = connect(mapStateToProps)(PrivateAppbarImpl)