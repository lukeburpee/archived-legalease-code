import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Profile from './components/profile';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Profile', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Profile/>
  		})
  	}
  })
}