import  { withRedux } from 'react-komposer-plus'
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core'

import { Main } from './../components';

const depsToPropsMapper = (context, action) => ({
	store:context.Store
})

export default useDeps(depsToPropsMapper) (Main);