import { connect } from 'react-redux'

import RightTroughImpl from './../components/righttrough.jsx';

const mapStateToProps = (state) => ({
	rightTroughOpen: state.core.righttrough.rightTroughOpen,
	rightTroughWidth: state.core.righttrough.rightTroughWidth,
	rightTroughVisibility: state.core.righttrough.rightTroughVisibility,
	rightTroughType: state.core.righttrough.rightTroughType
	
});
const RightTrough = connect(mapStateToProps)(RightTroughImpl);
export default RightTrough;