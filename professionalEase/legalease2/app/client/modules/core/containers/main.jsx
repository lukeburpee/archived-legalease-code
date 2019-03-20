import  { withRedux } from 'react-komposer-plus'
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core'

import MainImpl from './../components/main';

const depsToPropsMapper = (context, action) => ({
	store:context.Store
})

const Main = useDeps(depsToPropsMapper)(MainImpl);

export default Main;