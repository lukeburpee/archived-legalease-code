import Secondary from './../components/secondary.jsx';
import { withRedux, composeAll } from 'react-komposer-plus';
import { useDeps } from 'mantra-plus';

const mapStateToProps = (context, actions) => ({
	secondaryType: context.store.secondaryType
});

export default composeAll(
	withRedux(mapStateToProps),
	useDeps())(Secondary);