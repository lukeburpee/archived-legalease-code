import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Research from './components/research';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Cases/Research', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Research/>
  		})
  	}
  })
}