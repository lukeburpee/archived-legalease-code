import { connect } from 'react-redux';
import { useDeps, compose, composeAll } from 'mantra-core'

import PrivateImpl from './../components/private.jsx';

const mapStateToProps = (state) => ({
	view: state.core.layout.view,
	docked: state.core.leftsidebar.leftSidebarDocked
});

const mapDepsToProps = (context, action) => ({
	flowrouter: context.FlowRouter
});

const Priv = connect(mapStateToProps)(PrivateImpl);
const Private = useDeps(mapDepsToProps)(Priv);
export default Private;