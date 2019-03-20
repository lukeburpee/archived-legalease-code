import { connect } from 'react-redux';
import MatterSelectImpl from './../components/matterselect.jsx';

const mapStateToProps = (state) => ({
  matters: state.discovery.matterList,
  activeMatter: state.discovery.activeMatter
});

export default connect(mapStateToProps)(MatterSelectImpl);
