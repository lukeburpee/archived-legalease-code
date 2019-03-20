import React from 'react';
import { mount } from 'react-mounter';
import Main from './../main';
import PrivateLayout from './../private';

import Clients from './components';

export default function (injectDeps, { FlowRouter }) {
	const MainLayoutCtx = injectDeps(Main)

	FlowRouter.route('/clients', {
		action() {
			mount(MainLayoutCtx, {
				content: <PrivateLayout {...this.props}><Clients {...this.props}/></PrivateLayout>
			})
		}
	})
}