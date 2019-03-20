import { useDeps } from 'mantra-core';
import { connect } from 'react-redux';

import AppImpl from './../components/app';
import Loading from './../components/loading';
import Err from './../components/error';

const mapDepsToProps = (context, actions) => ({
	store: context.Store
});

export default useDeps(mapDepsToProps)(AppImpl);