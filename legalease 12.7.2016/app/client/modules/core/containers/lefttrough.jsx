import { connect } from 'react-redux'
import LeftTroughImpl from './../components/lefttrough.jsx';

const mapStateToProps = (state) => ({
	leftTroughOpen: state.core.lefttrough.leftTroughOpen,
	leftTroughWidth: state.core.lefttrough.leftTroughWidth,
	leftTroughVisibility: state.core.lefttrough.leftTroughVibility,
	leftTroughType: state.core.lefttrough.leftTroughType
});

const LeftTrough = connect(mapStateToProps)(LeftTroughImpl);

export default LeftTrough;