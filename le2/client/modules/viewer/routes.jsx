import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/viewer', {
  	action() {
  		mount(MainCtx, {
  			title: 'Viewer',
  			type: 'private',
  			content: <div>This is the Viewer Page</div>
  		})
  	}
  })
}
