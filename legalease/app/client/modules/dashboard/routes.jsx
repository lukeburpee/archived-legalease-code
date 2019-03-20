import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Dashboard from './components/dashboard';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Dashboard', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Dashboard/>
  		})
  	}
  })
}