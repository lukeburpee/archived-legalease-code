import React from 'react';
import {
	setDefaultLoadingComponent
} from 'react-komposer';

import CircularProgress from 'material-ui/CircularProgress';

const LoadingComponent = () => (
	<CircularProgress size={60} thickness={7}/>
);

setDefaultLoadingComponent(LoadingComponent);