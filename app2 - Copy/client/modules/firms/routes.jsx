import React from 'react';
import { mount } from 'react-mounter';
import Main from './../main';
import PrivateLayout from './../private';

export default function (injectDeps, { FlowRouter }) {
	const MainLayoutCtx = injectDeps(Main)

	FlowRouter.route('/firms', {
		action() {
			mount(MainLayoutCtx, {
				content: <PrivateLayout></PrivateLayout>
			})
		}
	})
}