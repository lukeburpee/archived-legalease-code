import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/dashboard', {
  	action() {
  		mount(MainCtx, {
  			title: 'Dashboard',
  			type: 'private',
  			content: <div>This is the Dashboard Page</div>
  		})
  	}
  })
}
