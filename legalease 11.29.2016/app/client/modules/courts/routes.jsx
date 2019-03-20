import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/courts', {
  	action() {
  		mount(MainCtx, {
  			title: 'Courts',
  			type: 'private',
  			content: <div>This is the Courts Page</div>
  		})
  	}
  })
}
