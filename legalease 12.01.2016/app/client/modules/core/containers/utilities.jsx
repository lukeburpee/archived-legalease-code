import { connect } from 'react-redux'

import UtilitiesImpl from './../components/utilities.jsx';

const mapStateToProps = (state) => ({
	active: state.core.righttrough.rightTroughType,
	utilitiesOpen: state.core.righttrough.rightTroughOpen,
	utilityWidth: state.core.righttrough.rightTroughWidth,
	viewerOpen: state.viewer.viewerOpen
});

const Utilities = connect(mapStateToProps)(UtilitiesImpl)

export default Utilities;