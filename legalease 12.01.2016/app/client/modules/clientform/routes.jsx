import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/clients/new', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <div>new client form</div>
  		})
  	}
  })
}
