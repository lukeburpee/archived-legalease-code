import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Users from './components/users';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/users', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Users/>
  		})
  	}
  })
}