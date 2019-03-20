import Primary from './../components/primary.jsx';
import { withRedux, composeAll } from 'react-komposer-plus';
import { useDeps } from 'mantra-plus';

const mapStateToProps = ({privatelayout}) => ({
	secondaryOpen: privatelayout.secondaryOpen
});

export default composeAll(
	withRedux(mapStateToProps),
	useDeps())(Primary);