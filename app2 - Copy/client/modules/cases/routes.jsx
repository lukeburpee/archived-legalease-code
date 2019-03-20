import React from 'react';
import { mount } from 'react-mounter';
import Main from './../main';
import PrivateLayout from './../private';

import Cases from './components';

export default function (injectDeps, { FlowRouter }) {
	const MainLayoutCtx = injectDeps(Main)

	FlowRouter.route('/cases', {
		action() {
			mount(MainLayoutCtx, {
				content: <PrivateLayout><Cases/></PrivateLayout>
			})
		}
	})
}